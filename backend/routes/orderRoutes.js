import express from "express";
const router = express.Router();
import { addOrderItems, getOrderById } from "../controllers/orderController.js";
import auth from "../middleware/authMiddleware.js";

router.post("/", auth, addOrderItems);
router.get("/:id", auth, getOrderById);

export default router;
