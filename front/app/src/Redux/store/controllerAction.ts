/* eslint-disable curly */
/* eslint-disable max-statements */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
// eslint-disable-next-line max-len
// https://itnext.io/build-a-react-redux-with-typescript-using-redux-toolkit-package-d17337aa6e39
import controllerSlice from "./controller-slice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import { RootState } from "./index";
import { BackUserModel, CanvasModel, ChatUserModel, ControllerModel } from "../models/redux-models";

import UserServices from "../service/ft-api-service";
import { AirlineSeatReclineNormalTwoTone } from "@mui/icons-material";
type MessageModel =
{
	sender: string,
	message: string,
	mode: string
}

export const	controllerActions = controllerSlice.actions;

export const	setActiveView = (activeView: string)
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	previousState = getState();
		const	reponse: ControllerModel = {
			...previousState.controller,
			activeView: activeView,
		};
		dispatch(controllerActions.setActiveView(reponse));
	});
};

export const	setThemeModeToLight = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	previousState = getState();
		const	response: ControllerModel = {
			...previousState.controller,
			themeMode: "light"
		};
		dispatch(controllerActions.setThemeModeToLight(response));
	});
};

export const	setThemeModeToDark = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	previousState = getState();
		const	response: ControllerModel = {
			...previousState.controller,
			themeMode: "dark"
		};
		dispatch(controllerActions.setThemeModeToDark(response));
	});
};

export const	setUserLoggedIn = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	previousState = getState();
		const	response: ControllerModel = {
			...previousState.controller,
			user:
			{
				...previousState.controller.user,
				isLoggedIn: true,
			}
		};
		dispatch(controllerActions.setUserLoggedIn(response));
	});
};

export const	logOffUser = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	previousState = getState();
		const	response: ControllerModel = {
			...previousState.controller,
			user:
			{
				...previousState.controller.user,
				isLoggedIn: false,
			}
		};
		dispatch(controllerActions.logOffUser(response));
	});
};

export const	userRequestRegistration = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	previousState = getState();
		const	response: ControllerModel = {
			...previousState.controller,
			registration:
			{
				...previousState.controller.registration,
				startedRegister: true,
				// TEST
				// step: 0
			}
		};
		dispatch(controllerActions.userRequestRegistration(response));
	});
};

export const	userRegistrationStepTwo = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	previousState = getState();
		const	response: ControllerModel = {
			...previousState.controller,
			registration:
			{
				...previousState.controller.registration,
				step: 1,
			}
		};
		dispatch(controllerActions.userRegistrationStepTwo(response));
	});
};


export const	userRegistrationStepThree = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	previousState = getState();
		const	response: ControllerModel = {
			...previousState.controller,
			registration:
			{
				...previousState.controller.registration,
				step: 2,
			}
		};
		dispatch(controllerActions.userRegistrationStepThree(response));
	});
};

export const	setCanvasSize = (size: CanvasModel)
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prevState = getState();
		const	response: ControllerModel = {
			...prevState.controller,
			canvas: size
		};
		dispatch(controllerActions.setCanvasSize(response));
	});
};

export const	setAbortRequestedValue = (value: boolean)
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prevState = getState();
		const	reponse: ControllerModel = {
			...prevState.controller,
			registration:
			{
				...prevState.controller.registration,
				abortRequested: value
			}
		};
		dispatch(controllerActions.setAbortRequestedValue(reponse));
	});
};

export const	resetRegistration = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prevState = getState();

		if (prevState.controller.registration.startedRegister === true)
			dispatch(controllerActions.resetRegistration());
	});
};

export const	setPreviousPage = (pageToSave : string)
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prevState = getState();
		let		response: ControllerModel;

		if (prevState.controller.previousPage === pageToSave)
			return ;
		else
			response = {
				...prevState.controller,
				previousPage: pageToSave,
			};
		dispatch(controllerActions.setPreviousPage(response));
	});
};

export const	setRequestHomeLink = (value: boolean)
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prevState = getState();
		const	response: ControllerModel = {
			...prevState.controller,
			registration:
			{
				...prevState.controller.registration,
				requestHomeLink: value
			}
		};
		dispatch(controllerActions.setRequestHomeLink(response));
	});
};

export const setBigWindow = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prevState = getState();
		const	response: ControllerModel = {
			...prevState.controller,
			user:
			{
				...prevState.controller.user,
				chat:
				{
					...prevState.controller.user.chat,
					window:
					{
						bigWindow: true,
						hiddenWindow: false,
						miniWindow: false
					}
				}
			}
		};
		dispatch(controllerActions.setBigWindow(response));
	});
};

export const setMiniWindow = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prevState = getState();
		const	response: ControllerModel = {
			...prevState.controller,
			user:
			{
				...prevState.controller.user,
				chat:
				{
					...prevState.controller.user.chat,
					window:
					{
						bigWindow: false,
						hiddenWindow: false,
						miniWindow: true
					}
				}
			}
		};
		dispatch(controllerActions.setMiniWindow(response));
	});
};

export const setHiddenWindow = ()
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prevState = getState();
		const	response: ControllerModel = {
			...prevState.controller,
			user:
			{
				...prevState.controller.user,
				chat:
				{
					...prevState.controller.user.chat,
					window:
					{
						bigWindow: false,
						hiddenWindow: true,
						miniWindow: false
					}
				}
			}
		};
		dispatch(controllerActions.setHiddenWindow(response));
	});
};

export const setPseudo = (name: string)
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const prevState = getState();
		const	array: BackUserModel[] = [...prevState.controller.allUsers];
		const	arrayChat: ChatUserModel[] = [...prevState.controller.user.chat.users];
		array.forEach((elem) =>
		{
			if (elem.id === prevState.controller.user.id)
				elem.username = name;
		});
		console.log("name ? ", name);
		arrayChat.forEach((elem) =>
		{
			if (elem.name === prevState.controller.user.username)
				elem.name = name;
		});
		const response: ControllerModel = {
			...prevState.controller,
			allUsers: [...array],
			user:
			{
				...prevState.controller.user,
				username: name,
				chat:
				{
					...prevState.controller.user.chat,
					// ca ca n'a pas de sens xD TEST
					pseudo: name,
					users: [...arrayChat]
				}
			}
		};
		dispatch(controllerActions.setPseudo(response));
	});
};

export const setChatConnected = (connected: boolean)
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const prevState = getState();
		const response: ControllerModel = {
			...prevState.controller,
			user:
			{
				...prevState.controller.user,
				chat:
				{
					...prevState.controller.user.chat,
					connected: connected
				}
			}
		};
		dispatch(controllerActions.setChatConnected(response));
	});
};

	export const setChatUsers = (users: ChatUserModel[])
	: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const prevState = getState();
		const response: ControllerModel = {
			...prevState.controller,
			user:
			{
				...prevState.controller.user,
				chat:
				{
					...prevState.controller.user.chat,
					users: users
				}
			}
		};
		dispatch(controllerActions.setChatUsers(response));
	});
};

export const setActiveConversationId = (activeConversationId: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const prevState = getState();
		const response: ControllerModel = {
			...prevState.controller,
			user:
			{
				...prevState.controller.user,
				chat:
				{
					...prevState.controller.user.chat,
					activeConversationId: activeConversationId
				}
			}
		};
		dispatch(controllerActions.setActiveConversationId(response));
	});
};

export const setCurrentChannel = (currentChannel: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const prevState = getState();
		const response: ControllerModel = {
			...prevState.controller,
			user:
			{
				...prevState.controller.user,
				chat:
				{
					...prevState.controller.user.chat,
					currentChannel: currentChannel
				}
			}
		};
		dispatch(controllerActions.setCurrentChannel(response));
	});
};

export const setKindOfConversation = (kindOfConversation: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const prevState = getState();
		const response: ControllerModel = {
			...prevState.controller,
			user:
			{
				...prevState.controller.user,
				chat:
				{
					...prevState.controller.user.chat,
					kindOfConversation: kindOfConversation
				}
			}
		};
		dispatch(controllerActions.setKindOfConversation(response));
	});
};

export const setNumberOfChannels = (numberOfChannels: number)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const prevState = getState();
		const response: ControllerModel = {
			...prevState.controller,
			user:
			{
				...prevState.controller.user,
				chat:
				{
					...prevState.controller.user.chat,
					numberOfChannels: numberOfChannels
				}
			}
		};
		dispatch(controllerActions.setNumberOfChannels(response));
	});
};

export const setRegistrationProcessStart = ()
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const prev = getState();

		const response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				registrationProcess: true,
				registrationError: "undefined"
			}
		};
		dispatch(controllerActions.setRegistrationProcessStart(response));
	})
}

export const setRegistrationProcessSuccess = ()
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const prev = getState();

		const response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				registrationProcess: false
			}
		};
		dispatch(controllerActions.setRegistrationProcessSuccess(response));
	})
}

export const setRegistrationProcessError = ()
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const prev = getState();

		const response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				registrationProcess: false,
				registrationError: "error",
			}
		};
		dispatch(controllerActions.setRegistrationProcessError(response));
	})
}

export const	setUserData = (data: any)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();

		const	array: BackUserModel[] = [...prev.controller.allUsers];

		array.forEach((elem) =>
		{
			if (elem.id === data.id)
			{
				elem.id = data.id;
				elem.email = data.email;
				elem.firstName = data.firstName;
				elem.lastName = data.lastName;
				elem.username = data.login;
			}
		});
		const	response: ControllerModel = {
			...prev.controller,
			allUsers: [...array],
			user:
			{
				...prev.controller.user,
				id: data.id,
				email: data.email,
				bearerToken: data.token,
				firstName: data.firstName,
				lastName: data.lastName
			}
		}
		dispatch(controllerActions.setUserData(response));
	});
}

export const verifyToken = ()
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return (async (dispatch, getState) =>
	{
		const prev = getState();

		if (prev.controller.user.registrationError !== "undefined"
			|| prev.controller.user.bearerToken === "undefined")
			return ;
		console.log("Before await");
		const	data = await UserServices.verifyToken(prev.controller.user.bearerToken, prev.server.serverLocation);
		if (data === "ERROR")
		{
			dispatch(setRegistrationProcessError());
			dispatch(resetRegistration);
			return ;
		}

		// console.log("Data inside verify token ");
		// console.log(data);
		dispatch(setRegistrationProcessSuccess());
		dispatch(userRegistrationStepTwo());
	})
}

export const registerClientWithCode = (code : string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return (async (dispatch, getState) =>
	{
		const 	prev = getState();
		let		response: ControllerModel;

		response = prev.controller;
		if (prev.controller.user.isLoggedIn
			|| prev.controller.user.registrationProcess
			|| prev.controller.user.registrationError !== "undefined")
		{
			// dispatch(controllerActions.registerClientWithCode(prev.controller));
			return ;
		}
		dispatch(setRegistrationProcessStart())
		// console.log("Code is equals to : ", code);
		const	data: any = await UserServices.register(code, "localhost");
		if (data === "ERROR")
		{
			dispatch(setRegistrationProcessError());
			return ;
		}
		else
		{
			const	array: BackUserModel[] = [...prev.controller.allUsers];

			array.forEach((elem) =>
			{
				if (elem.id === data.id)
				{
					elem.id = data.id;
					elem.email = data.email;
					elem.firstName = data.firstName;
					elem.lastName = data.lastName;
					elem.username = data.username;
					elem.avatar = data.avatar;
				}
			});

			response = {
				...prev.controller,
				allUsers: [...array],
				user:
				{
					...prev.controller.user,
					id: data.id,
					email: data.email,
					// our token
					bearerToken: data.token,
					username: data.username,
					firstName: data.firstName,
					lastName: data.lastName,
					avatar: data.avatar,
					profile:
					{
						editView: false,
						friendView: false,
						publicView: false,
						myView: true
					}
				}
			}
		}
		dispatch(controllerActions.registerClientWithCode(response));
		// dispatch(controllerActions.verifyToken());
		console.log("end of registration");
	});
};

export const registerNumberForDoubleAuth = (numero : string, token: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return (async (dispatch, getState) =>
	{
		const 	prev = getState();
		let		response: ControllerModel;

		response = prev.controller;
		if (prev.controller.user.isLoggedIn
			|| prev.controller.user.registrationError !== "undefined")
			return ;
		const	data: any = await UserServices.getNumberForDoubleAuth(numero, token, "localhost");
		if (data === "ERROR")
		{
			dispatch(setRegistrationProcessError());
			return ;
		}
		else
		{
			response = {
				...prev.controller,
				user:
				{
					...prev.controller.user,
					phoneNumber: numero
				}
			}
			console.log("controller action 791  ", data);
		}
		dispatch(controllerActions.registerNumberForDoubleAuth(response));
		console.log("phone number enregistre");
	});
};

export const receiveValidationCode = (numero : string, token: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return (async (dispatch, getState) =>
	{
		const 	prev = getState();
		let		response: ControllerModel;

		response = prev.controller;
		if (prev.controller.user.isLoggedIn
			|| prev.controller.user.registrationError !== "undefined")
			return ;
		const	data: any = await UserServices.receiveValidationCodeFromTwilio(numero, token, "localhost");
		if (data === "ERROR")
		{
			dispatch(setRegistrationProcessError());
			return ;
		}
		else
		{
			response = {
				...prev.controller,
				user:
				{
					...prev.controller.user,
					phoneNumber: numero
				}
			}
			console.log("controller action 791  ", data);
		}
		dispatch(controllerActions.receiveValidationCode(response));
		console.log("phone number enregistre");
	});
};

export const GetValidationCode = (otpCode : string, token: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return (async (dispatch, getState) =>
	{
		const 	prev = getState();
		let		response: ControllerModel;

		response = prev.controller;
		if (prev.controller.user.isLoggedIn
			|| prev.controller.user.registrationError !== "undefined")
			return ;
		const	data: any = await UserServices.getValidationCodeFromTwilio(prev.controller.user.phoneNumber, otpCode, token, "localhost");
		if (data === "error")
		{
			dispatch(setRegistrationProcessError());
			return ;
		}
		else
		{
			response = {
				...prev.controller,
				user:
				{
					...prev.controller.user,
					otpCode: otpCode,
					codeValidated: data.data
				}
			}
			console.log("controller action 791  ", data.data);
		}
		dispatch(controllerActions.getValidationCode(response));
		console.log("code enregistre");
	});
};

export const	setCodeValidated = (data: boolean)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();

		const	response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				codeValidated: data,
			}
		}
		dispatch(controllerActions.setCodeValidated(response));
	});
}

export const	setDoubleAuth = (data: boolean)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();
		const	response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				doubleAuth: data,
			}
		}
		dispatch(controllerActions.setDoubleAuth(response));
	});
}

export const	setPhoneNumber = (data: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();
		const	response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				phoneNumber: data,
			}
		}
		dispatch(controllerActions.setPhoneNumber(response));
	});
}

export const	setRegistered = (data: boolean)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();
		const	response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				registered: data,
			}
		}
		dispatch(controllerActions.setRegistered(response));
	});
}

export const	reinitialiseUser = ()
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();

		const	response: ControllerModel = {
			...prev.controller,
			registration:
			{
				startedRegister: false,
				step: 0,
				codeOauthFT: "undefined",
				abortRequested: false,
				requestHomeLink: false
			},
			user:
			{
				...prev.controller.user,
				isLoggedIn: false,
				id: -1,
				rememberMe: false,
				email: "undefined",
				bearerToken: "undefined",
				firstName: "undefined",
				lastName: "undefined",
				username: "undefined",
				login: "undefined",
				registrationProcess: false,
				registrationError: "undefined",
				doubleAuth: false,
				phoneNumber: "undefined",
				registered: false,
				avatar: "https://thispersondoesnotexist.com/",
				password: "undefined",
				chat:
				{
					...prev.controller.user.chat,
					pseudo: "undefined"
				}
			}
		}
		dispatch(controllerActions.reinitialiseUser(response));
	});
}

export const	setAvatar = (data: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();
		const	array: BackUserModel[] = [...prev.controller.allUsers];

		array.forEach((elem) =>
		{
			if (elem.id === prev.controller.user.id)
				elem.avatar = data;
		});
		const	response: ControllerModel = {
			...prev.controller,
			allUsers: [...array],
			user:
			{
				...prev.controller.user,
				avatar: data,
			}
		}
		dispatch(controllerActions.setAvatar(response));
	});
}

export const	setProfileEditView = ()
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();

		const	response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				profile:
				{
					editView: true,
					friendView: false,
					publicView: false,
					myView: false
				},
			}
		}
		dispatch(controllerActions.setProfileEditView(response));
	});
}

export const	setProfileFriendView = ()
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();

		const	response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				profile:
				{
					editView: false,
					friendView: true,
					publicView: false,
					myView: false
				},
			}
		}
		dispatch(controllerActions.setProfileFriendView(response));
	});
}

export const	setProfilePublicView = ()
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();

		const	response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				profile:
				{
					editView: false,
					friendView: false,
					publicView: true,
					myView: false
				},
			}
		}
		dispatch(controllerActions.setProfilePublicView(response));
	});
}

export const	setProfileMyView = ()
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();

		const	response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				profile:
				{
					editView: false,
					friendView: false,
					publicView: false,
					myView: true
				},
			}
		}
		dispatch(controllerActions.setProfileMyView(response));
	});
}

export const	setPassword = (password: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();
		const	response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				password: password
			}
		}
		dispatch(controllerActions.setPassword(response));
	});
}

export const	setEmail = (email: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();
		const	array: BackUserModel[] = [...prev.controller.allUsers];

		array.forEach((elem) =>
		{
			if (elem.id === prev.controller.user.id)
				elem.email = email;
		});
		const	response: ControllerModel = {
			...prev.controller,
			allUsers: [...array],
			user:
			{
				...prev.controller.user,
				email: email
			},
		}
		dispatch(controllerActions.setEmail(response));
	});
}

export const	setLogin = (login: string)
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return ((dispatch, getState) =>
	{
		const	prev = getState();

		const	response: ControllerModel = {
			...prev.controller,
			user:
			{
				...prev.controller.user,
				login: login
			}
		}
		dispatch(controllerActions.setLogin(response));
	});
}

export const	setAllUsers = ()
: ThunkAction<void, RootState, unknown, AnyAction> =>
{
	return (async (dispatch, getState) =>
	{
		const	prev = getState();

		const	theUsers: any = await UserServices.getAllTheUsers("localhost");

		if (theUsers === "error")
		{
			console.error("Error to get users");
			return ;
		}
		console.log("here theUsers", theUsers);
		const array: BackUserModel[] = theUsers;

		const	response: ControllerModel = {
			...prev.controller,
			allUsers: [...array]
		}
		dispatch(controllerActions.setAllUsers(response));
	});
}
