import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc Fetch all products 
//@route GET /api/products
//@access Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (user && (user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id)
		})

	} else {
		res.status(401)
		throw new Error('Invalid email or password')
	}

});
//Register new user
//POST
//{{url}}api/users
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	let ress = 0;
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(401);
		throw new Error("User already exists");
	}
	const user = User.create({
		email, password, name
	})

	return user ? res.status(201).json({
		_id: user._id,
		name: user.name,
		email: user.email,
		isAdmin: user.isAdmin,
		token: generateToken(user._id)
	}) : res.status(400);

});

const getUserProfile = asyncHandler(async (req, res) => {
	res.send("success");

});

export { authUser, getUserProfile, registerUser };


