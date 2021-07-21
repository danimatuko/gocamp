import dotenv from "dotenv";
import users from "../backend/data/users.js";
import products from "../backend/data/products.js";
import User from "./models/User.js";
import Order from "./models/Order.js";
import Product from "./models/Product.js";
import connectToDB from "./config/db.js";
import "colors";

dotenv.config();
connectToDB();

const importData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);
		const admin = createdUsers[0]._id;

		const sampeleProducts = products.map((product) => {
			return { ...product, user: admin };
		});
		console.log("data imported".bgGreen);

		await Product.insertMany(sampeleProducts);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

const destroytData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log("data destroyed".bgMagenta);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

process.argv[2] === "-d" ? destroytData() : importData();
