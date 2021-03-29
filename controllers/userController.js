import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

//Autheticate user
//@route POST /api/users/login
//@access
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	res.send(email, password);
});

export { authUser };
