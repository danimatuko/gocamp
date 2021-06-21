import express from "express";
import { updateOrderToPaid } from "../controllers/orderController.js";
const router = express.Router();
import { getProducts, getProductById} from "../controllers/productsController.js";

router.get("/", getProducts);

router.get("/:id", getProductById);

export default router;
