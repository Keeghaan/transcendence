
import
{
	PayloadAction,
	createSlice
}	from "@reduxjs/toolkit";

import { GameEngineModel as Model } from "../models/redux-models";
import { setReadyPlayerCount } from "./gameEngineAction";

export const	initialGameEngineState: Model = {
	server:
	{
		dimension:
		{
			height: 0,
			width: 0,
		},
		scaleServer:
		{
			height: 0,
			width: 0
		},
		frameNumber: 0,
		numberOfUser: 0,
		readyPlayerCount: 0,
	},
	board:
	{
		dimension:
		{
			height: 0,
			width: 0
		},
		ball:
		{
			position:
			{
				x: 1,
				y: 1,
			}
		},
		playerOne:
		{
			position:
			{
				x: 1,
				y: 1,
			}
		},
		playerTwo:
		{
			position:
			{
				x: 1,
				y: 1,
			}
		}
	}
};

const	gameEngineSlice = createSlice(
{
	name: "gameEngine",
	initialState: initialGameEngineState,
	reducers:
	{
		setServerDimension(state, action: PayloadAction<Model>)
		{
			state.server.dimension = action.payload.server.dimension;
		},
		setScaleServer(state, action: PayloadAction<Model>)
		{
			state.server.scaleServer = action.payload.server.scaleServer;
		},
		setBoardDimension(state, action: PayloadAction<Model>)
		{
			state.board.dimension = action.payload.board.dimension;
		},
		setReadyPlayerCount(state, action: PayloadAction<Model>)
		{
			state.server.readyPlayerCount
				= action.payload.server.readyPlayerCount;
		},
		setPlayerOnePos(state, action: PayloadAction<Model>)
		{
			state.board.playerOne.position
				= action.payload.board.playerOne.position;
		},
		setPlayerTwoPos(state, action: PayloadAction<Model>)
		{
			state.board.playerTwo.position
				= action.payload.board.playerTwo.position;
		},
		setPlOneSocket(state, action: PayloadAction<Model>)
		{
			state.board.plOneSocket
				= action.payload.board.plOneSocket;
		},
		setPlTwoSocket(state, action: PayloadAction<Model>)
		{
			state.board.plTwoSocket
				= action.payload.board.plTwoSocket;
		},
		setPlOneScore(state, action: PayloadAction<Model>)
		{
			state.board.plOneScore
				= action.payload.board.plOneScore;
		},
		setPlTwoScore(state, action: PayloadAction<Model>)
		{
			state.board.plTwoScore
				= action.payload.board.plTwoScore;
		},
		setFrameNumber(state, action: PayloadAction<Model>)
		{
			state.server.frameNumber
				= action.payload.server.frameNumber;
		},
		setBallPosition(state, action: PayloadAction<Model>)
		{
			state.board.ball.position = action.payload.board.ball.position;
		},
		setNumberOfUsers(state, action: PayloadAction<Model>)
		{
			state.server.numberOfUser = action.payload.server.numberOfUser;
		},
	}
});

export default gameEngineSlice;