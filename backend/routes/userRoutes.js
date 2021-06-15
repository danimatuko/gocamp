import express from "express";
const router = express.Router();
import { login, getUserProfile, register } from "../controllers/userController.js";
import auth from "../middleware/authMiddleware.js";


router.post("/", register);
router.post("/login", login);
router.get("/profile", auth, getUserProfile);

export default router;
