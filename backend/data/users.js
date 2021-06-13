import bycrypt from "bcryptjs";

const users = [
	{
		first_name: "Admin",
		last_name: "User",
		email: "admin@example.com",
		password: bycrypt.hashSync("123456"),
		isAdmin: true
	},
	{
		first_name: "John",
		last_name: "Doe",
		email: "john@example.com",
		password: bycrypt.hashSync("123456")
	},
	{
		first_name: "Jane",
		last_name: "Doe",
		email: "jane@example.com",
		password: bycrypt.hashSync("123456")
	}
];

export default users;
