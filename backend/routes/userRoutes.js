import express from "express";
const router = express.Router();
import {
	login,
	getUserProfile,
	register,
	getUsers,
	deleteUser,
	editUser,
	getUserById
} from "../controllers/userController.js";
import admin from "../middleware/adminMiddlware.js";
import auth from "../middleware/authMiddleware.js";

router.post("/", register);
router.post("/login", login);
router.get("/profile", auth, getUserProfile);
router.get("/:id", auth, getUserById);

/* ADMIN ACCSESS */
router.get("/", [auth, admin], getUsers);
router.put("/:id/edit", [auth, admin], editUser);
router.delete("/:id", [auth, admin], deleteUser);

export default router;
