import express from "express";
const router = express.Router();
import {
	login,
	getUserProfile,
	register,
	getUsers,
	deleteUser
} from "../controllers/userController.js";
import admin from "../middleware/adminMiddlware.js";
import auth from "../middleware/authMiddleware.js";

router.post("/", register);
router.post("/login", login);
router.get("/profile", auth, getUserProfile);

/* ADMIN ACCSESS */
router.get("/", [auth, admin], getUsers);
router.delete("/:id", [auth, admin], deleteUser);

export default router;
