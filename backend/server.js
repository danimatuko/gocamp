import express from "express";
import products from "../backend/data/products.js";
const app = express();
const PORT = process.env.PORT || 5000;
import dotenv from "dotenv";

dotenv.config();

app.get("/", (req, res) => {
	res.send("api is running");
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/products/:id", (req, res) => {
	const product = products.find((product) => product._id === req.params.id);
	res.json(product);
});

app.listen(PORT, console.log(`server listening in ${process.env.NODE_ENV} mode on port ${PORT}`));
