import express from "express";
const router = express.Router();
import {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
	getUserOrders
} from "../controllers/orderController.js";
import auth from "../middleware/authMiddleware.js";

router.post("/", auth, addOrderItems);
router.get("/myorders", auth, getUserOrders);
router.get("/:id", auth, getOrderById);
router.put("/:id/pay", updateOrderToPaid);

export default router;
