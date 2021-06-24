import jwt from "jsonwebtoken";

const generateToken = (id, isAdmin) => {
	const token = jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
		expiresIn: "1h"
	});
	return token;
};
export default generateToken;
