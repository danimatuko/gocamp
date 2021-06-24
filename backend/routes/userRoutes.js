import express from "express";
const router = express.Router();
import { login, getUserProfile, register, getUsers } from "../controllers/userController.js";
import admin from "../middleware/adminMiddlware.js";
import auth from "../middleware/authMiddleware.js";

router.post("/", register);
router.post("/login", login);
router.get("/profile", auth, getUserProfile);
router.get("/", [auth, admin], getUsers);

export default router;
