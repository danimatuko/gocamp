import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

const register = asyncHandler(async (req, res) => {
	const { first_name, last_name, email, password } = req.body;
	if (first_name === "" || last_name === "" || email === "" || password === "") {
		res.status(400);
		throw new Error("All fields are required.");
	}
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error("User alerdy exist");
	} else {
		// hash the password before saving the user in the database
		const salt = await bcrypt.genSalt(10);
		const encryptedPassword = await bcrypt.hash(password, salt);

		const user = await User.create({
			first_name,
			last_name,
			email,
			password: encryptedPassword
		});

		if (user) {
			res.status(201).json({
				_id: user._id,
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				isAdmin: user.isAdmin,
				token: generateToken(user._id, user.isAdmin)
			});
		} else {
			res.status(400);
			throw new Error("Invalid user data");
		}
	}
});

const login = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id, user.isAdmin)
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
});

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findOne(req.user._id);
	if (!user) {
		res.status(404);
		throw new Error("User not found");
	}
	res.json({
		_id: user._id,
		first_name: user.first_name,
		last_name: user.last_name,
		email: user.email,
		isAdmin: user.isAdmin
	});
});

const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

export { login, getUserProfile, register, getUsers };
