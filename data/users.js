import bcrypt from "bcryptjs";

const users = [
	{
		name: "Adminnnn",
		email: "johnaplkkesed@gmail.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true
	},
	{
		name: "Ain Usmer",
		email: "johplced@gmail.com",
		password: bcrypt.hashSync("123456", 10)
	},
	{
		name: "Admin Uellr",
		email: "johnaleslld@gmail.com",
		password: bcrypt.hashSync("123456", 10)
	}, {
		name: "Marcellus Jones",
		email: "mdjonesonly310@gmail.com",
		password: bcrypt.hashSync("Garagec250", 10)
	}
];
export default users;
