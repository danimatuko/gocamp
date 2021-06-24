import jwt from "jsonwebtoken";
const auth = (req, res, next) => {
	const token = req.header("Authorization");
	if (!token) return res.status(401).send("No token provided");

	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decodedToken;
		next();
	} catch (e) {
		res.status(400);
		throw new Error("Invalid token");
	}
};

export default auth;
