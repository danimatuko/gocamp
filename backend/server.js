import express from "express";
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
import morgan from "morgan";
dotenv.config();

const app = express();
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}
dotenv.config();

connectToDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.get("/api/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

const __dirname = path.resolve(); // ____dirname is not defined in ES module scope
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
	// Express will serve up production assets
	app.use(express.static(path.join(__dirname, "/frontend/build")));
	// Express will serve up the front-end index.html file if it doesn't recognize the route
	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
	);
}

app.use(notFound);

app.use(errorHandler);

app.listen(
	PORT,
	console.log(`server listening in ${process.env.NODE_ENV} mode on port ${PORT}`.green)
);
