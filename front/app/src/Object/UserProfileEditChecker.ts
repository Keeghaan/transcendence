/* eslint-disable max-lines-per-function */
import { Public } from "@mui/icons-material";
import UserProfileEdit from "./UserProfileEdit";
import { UserModel } from "../Redux/models/redux-models";
/* eslint-disable max-statements */


class	UserProfileEditChecker
{
	public	email: boolean;
	public	password: boolean;
	public	uniqueness: boolean;
	public	username: boolean;
	public	phoneNumber: boolean;

	constructor()
	{
		this.email = false;
		this.password = false;
		this.uniqueness = false;
		this.username = false;
		this.phoneNumber = false;
	}

	public checkData(data: UserProfileEdit)
	{
		this.resetError();
		if (data.emailAddress === undefined
			|| data.emailAddress.length === 0)
			this.email = true;
		if (data.password === undefined
			|| data.passwordConfirm === undefined
			|| data.password.length === 0
			|| data.passwordConfirm.length === 0
			|| data.password !== data.passwordConfirm)
			this.password = true;
		if (data.uniquenessPassword !== "AgreeWithUniquenessOfPassword")
			this.uniqueness = true;
		// check username unique
		if (data.username === undefined || data.username.length === 0 )
			this.username = true;
		const	emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		this.email = !(emailRegex.test(data.emailAddress));
		if (data.doubleAuth)
		{
			if (data.phoneNumber === undefined)
					this.phoneNumber = true;
			if (data.phoneNumber?.length > 0 && data.phoneNumber?.length < 12)
			{
				if (!Number(data.phoneNumber))
					this.phoneNumber = true;
			}
			else
				this.phoneNumber = true;
		}
		else
			this.phoneNumber = false;
	}

	public	resetError = () =>
	{
		this.email = false;
		this.password = false;
		this.uniqueness = false;
		this.username = false;
		this.phoneNumber = false;
	};

	public	getPlainObject = () =>
	{
		return ({
			email: this.email,
			password: this.password,
			uniqueness: this.uniqueness,
			username: this.username,
			phoneNumer: this.phoneNumber,
		});
	};
}

export default UserProfileEditChecker;