export interface ApplicationUserModel
{
	accessToken: string;
	tokenType: string;
	expiresIn: string;
	refreshToken: string;
	scope: string;
	createdAt: string;
	secretValidUntil: string;
}

export interface UserPublicResponseModel
{
	id: any;
	email: string;
	login: string;
	firstName: string;
	lastName: string;
	// avatar: string | {
	// 	link: string,
	// 	version:
	// 		{
	// 			large: string,
	// 			medium: string,
	// 			small: string,
	// 			mini: string
	// 		}
	// }
}
export interface UserModel
{
	ftApi: ApplicationUserModel;
	retStatus: number;
	date: string;
	id: any;
	email: string;
	login: string;
	firstName: string;
	lastName: string;
	url: string;
	avatar: string | {
		link: string,
		version:
			{
				large: string,
				medium: string,
				small: string,
				mini: string
			}
	}
	location: string;
	revokedConnectionRequest: boolean;
	authService:
	{
		token: string;
		expAt: number;
		doubleAuth:
		{
			enable: boolean;
			valid: boolean;
			validationCode: string;
			// model phone number +33621523456
			phoneNumber: string;
			phoneRegistered: boolean;
			lastIpClient: string;
		}
	};
	registrationProcessEnded: boolean;
	// revokeConnectionRequest: boolean;
}

export interface AdminResponseModel
{
	numberOfClient: number;
	array : Array<UserModel>
}

export interface UserRegisterResponseModel
{
	message: string;
	token: string;
	// uuid: string;
	// password: string;
	// creationDate: string;
	statusCode: number;
}
export interface UserLoginResponseModel
{
	message: string;
	token: string;
	expireAt: number;
}

export interface UserVerifyTokenResModel
{
	message: string;
	statusCode: number;
}

export interface JWTDecoded
{
	id?: any;
	email?: string;
	iat?: number;
	exp?: number;
}

export interface UserAuthorizationGuardSignatureModel
{
	validTokenSignature: boolean;
	id?: any;
	email?: string;
	iat?: number;
	exp?: number;
	token?: string;
}

export interface UserRegisterResponseModel
{
	message: string;
	id: string;
	email: string;
	// creationDate: string;
	token: string;
	statusCode: number;
	login: string;
	firstName: string;
	lastName: string;
	avatar: string | {
		link: string,
		version: {
			large: string,
			medium: string,
			small: string,
			mini: string
		}
	}
}
