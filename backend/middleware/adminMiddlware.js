const admin = (req, res, next) => {
	const isAdmin = req.user.isAdmin;
	if (!isAdmin) {
		res.status(403);
		throw new Error("Not authorized as an admin");
	}
	next();
};
export default admin;
