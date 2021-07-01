import express from "express";
const router = express.Router();
import { getProducts, getProductById, deleteProduct } from "../controllers/productsController.js";
import admin from "../middleware/adminMiddlware.js";
import auth from "../middleware/authMiddleware.js";

router.get("/", getProducts);

router.get("/:id", getProductById);

/* ADMIN ACCSESS */
router.delete("/:id", [auth, admin], deleteProduct);

export default router;
