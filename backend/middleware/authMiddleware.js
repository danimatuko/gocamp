import jwt from "jsonwebtoken";
import User from "../models/User.js";
const auth = (req, res, next) => {
	const token = req.header("authorization");
	if (!token) return res.status(401).send("No token provided");

	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decodedToken;
		next();
	} catch (e) {
		return res.status(400).send("Invalid token");
	}
};

export default auth;
