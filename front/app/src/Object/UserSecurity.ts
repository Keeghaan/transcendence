/* eslint-disable max-depth */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
/* eslint-disable curly */

import UserSecurityChecker from "./UserSecurityChecker";

/* eslint-disable max-len */
class	UserSecurity
{
	private	data: FormData;
	public	phoneNumber: string;
	public	doubleAuth: boolean;
	public	checker: UserSecurityChecker;


	public	constructor(data: FormData)
	{
		this.data = data;
		this.doubleAuth = this.form("doubleAuth");
		this.phoneNumber = this.form("phone-number");
		this.checker = new UserSecurityChecker();
	}

	public	check = () =>
	{
		this.checker.checkNumber(this);
	}

	public	form = (field: string) =>
	{
		return (this.data.get(field) as any);
	};

	public	getPlainObject = () =>
	{
		return (
		{
			phoneNumber: this.phoneNumber,
			doubleAuth: this.doubleAuth,
		});
	};
}

export default UserSecurity;
