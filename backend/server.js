import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import dotenv from "dotenv";
import path from "path";
import connectToDB from "./config/db.js";
import "colors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectToDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.get("/api/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

const dirName = path.resolve();
app.use("/uploads", express.static(path.join(dirName, "/uploads")));

app.use(notFound);

app.use(errorHandler);

app.listen(
	PORT,
	console.log(`server listening in ${process.env.NODE_ENV} mode on port ${PORT}`.green)
);
