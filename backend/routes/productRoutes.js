import express from "express";
const router = express.Router();
import {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
	addProductReview
} from "../controllers/productsController.js";
import admin from "../middleware/adminMiddlware.js";
import auth from "../middleware/authMiddleware.js";

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/:id/reviews", auth, addProductReview);

/* ADMIN ACCSESS */
router.post("/", [auth, admin], createProduct);
router.put("/:id", [auth, admin], updateProduct);
router.delete("/:id", [auth, admin], deleteProduct);

export default router;
