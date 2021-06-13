import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import "colors";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectToDB();

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(
	PORT,
	console.log(`server listening in ${process.env.NODE_ENV} mode on port ${PORT}`.green)
);
