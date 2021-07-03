import express from "express";
const router = express.Router();
import {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
	getUserOrders,
	getAllOrders,
	updateOrderToDelivered
} from "../controllers/orderController.js";
import auth from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddlware.js";

router.get("/myorders", auth, getUserOrders);
router.get("/:id", auth, getOrderById);
router.get("/", [auth, admin], getAllOrders);

router.post("/", auth, addOrderItems);

router.put("/:id/pay", auth, updateOrderToPaid);
router.put("/:id/deliver", [auth, admin], updateOrderToDelivered);

export default router;
