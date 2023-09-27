/* eslint-disable curly */
/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable max-len */
/* eslint-disable max-statements */
import { Server, Socket } from "socket.io";
import Chat from "./Objects/Chat";
import User from "./Objects/User";
import Channel from "./Objects/Channel";

import
{
	ConnectedSocket,
	MessageBody,
	OnGatewayConnection,
	OnGatewayDisconnect,
	OnGatewayInit,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer
}	from "@nestjs/websockets";
import { ChatService } from "./Chat.service";

type	ActionSocket = {
	type: string,
	payload?: any
};

type MessageModel =
{
	sender: string,
	message: string,
	id: number
}

@WebSocketGateway(
{
	cors:
	{
		origin: "*"
	},
})
export class ChatSocketEvents
		implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
	{
		@WebSocketServer()
		server: Server;
		// chat: Chat;

		public	constructor(private readonly chatService: ChatService)
		{
		}

		afterInit(server: any)
		{
		}

		handleConnection(client: Socket)
		{
			const searchUser = this.chatService.searchUser(client.id);
			if (searchUser === undefined)
			{
				const newUser = new User("test", client);
				this.chatService.pushUser(newUser, client.id);
				const	action = {
					type: "init-channels",
					payload: {
						channels: this.chatService.getChanMap(),
						uniqueId: client.id,
					}
				};
				client.emit("display-channels", action);
			}
		}

		handleDisconnect(client: Socket)
		{
			const	userIndex = this.chatService.searchUserIndex(client.id);
			const	socketIndex = this.chatService.searchSocketIndex(client.id);
			if (userIndex !== undefined)
				this.chatService.deleteUser(userIndex, socketIndex);
		}

		@SubscribeMessage("display-conversation")
		handleDisplayConversationWindow(
			@MessageBody() data: ActionSocket,
			@ConnectedSocket() client: Socket
		)
		{
			client.join(data.payload.id);
			if (data.type === "display-conversation")
			{
				const action = {
					type: "conversation",
					payload:
					{
						sender: client.id,
						conversationId: data.payload.id
					}
				};
				this.server.to(data.payload.chanName).emit("display-conversation", action);
			}
		}

		@SubscribeMessage("sending-message")
		handleSendingMessageToUser(
			@MessageBody() data: ActionSocket,
			@ConnectedSocket() client: Socket
		)
		{
			if (data.type === "send-message")
			{
				client.join(data.payload.chanName);
				const action = {
					type: "message-to-send",
					payload:
					{
						sender: client.id,
						msgRoom: [
							{
								id: data.payload.id,
								roomName: data.payload.chanName,
								privateConv: data.payload.privateConv,
								messageContent: data.payload.content,
							}
						]
					}
				};
				this.server.to(data.payload.chanName).emit("sending-message", action);
			}
		}

		@SubscribeMessage("info")
		handleInformation(
			@MessageBody() data: ActionSocket,
			@ConnectedSocket() client: Socket
		)
		{
			if (data.type === "get-user-list")
			{
				console.log(data);
				const copyUsers = this.chatService.getAllUsers();
				const	searchUser = copyUsers.findIndex((elem) =>
				{
					return (client.id === elem.id);
				});
				copyUsers.splice(searchUser, 1);
				const action = {
					type: "sending-list-user",
					payload:
					{
						// arrayListUsers: this.chatService.getAllUsers(),
						arrayListUsers: copyUsers
					}
				};
				client.emit("info", action);
			}	// console.log(data);
			// console.log(this.chatService.getAllUsers());
			// switch (data.type)
			// {
			// 	case "get-user-list":
			// 		client.emit("info", this.chatService.getAllUsers());
			// 		// console.log(this.chatService.getAllUsers());
			// 		break;
			// 	default:
			// 		break;
			// }

			if (data.type === "sent-message")
			{
				const	channel = this.chatService.searchChannelByName(data.payload.chanName);
				if (channel === undefined)
					return ;
				const	id = channel.messages.length + 1;
				const newMessage: MessageModel = {
					sender: client.id,
					message: data.payload.message,
					id: id
				};
				channel.addNewMessage(newMessage);
				const	action = {
					type: "update-messages",
					payload: {
						messages: channel.messages,
						chanName: channel.name,
					}
				};
				this.server.to(channel.name).emit("update-messages", action);
			}
		}

		@SubscribeMessage("channel-info")
		handleChannels(
			@MessageBody() data: ActionSocket,
			@ConnectedSocket() client: Socket
		)
		{
			if (data.type === "create-channel")
			{
				const newChannel = new Channel(data.payload.chanName,
					client,
					data.payload.chanMode,
					data.payload.chanPassword);
				newChannel.chat = this.chatService.getChat();
				newChannel.owner = client.id;
				newChannel.addAdmin(client.id);
				client.join(newChannel.name);
				this.chatService.addNewChannel(newChannel, data.payload.chanId);
				const	action = {
					type: "add-new-channel",
					payload: this.chatService.getChanMap(),
				};
				this.server.emit("display-channels", action);
			}

			if (data.type === "destroy-channel")
			{
				const	searchChannel = this.chatService.searchChannelByName(data.payload.name);
				let isAdmin: boolean;
				if (searchChannel?.isAdmin(client.id) === true)
					isAdmin = true;
				else
					isAdmin = false;
				const	action = {
					type: "destroy-channel",
					payload: {
						chanMap: this.chatService.getChanMap(),
						message: "",
					}
				};
				if (isAdmin === true)
				{
					this.chatService.deleteChannel(data.payload.name);
					this.server.emit("display-channels", action);
				}
				else
				{
					action.payload.message = "You are not the channel's admin !";
					client.emit("display-channels", action);
				}
			}

			if (data.type === "asked-join")
			{
				const 	action = {
					type: "asked-join",
					payload: {
						message: "",
					}
				};

				const	searchChannel = this.chatService.searchChannelByName(data.payload.chanName);
				if (searchChannel)
				{
					if (searchChannel.mode === "private")
						action.payload.message = "This channel is private";
					if (searchChannel.isBanned(client.id) === true)
						action.payload.message = "You have been banned from this channel";
				}
				client.emit("display-channels", action);
				if (action.payload.message === "")
					client.join(data.payload.chanName);
			}

			if(data.type === "password-for-protected")
			{
				const	action = {
					type: "protected-password",
					payload: {
						correct: ""
					}
				};
				const	channel = this.chatService.searchChannelByName(data.payload.chanName);
				if (channel?.password === data.payload.password)
					action.payload.correct = "true";
				client.emit("display-channels", action);
			}
		}
	}
