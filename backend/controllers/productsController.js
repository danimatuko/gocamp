import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";

const getProducts = asyncHandler(async (req, res) => {
	const page = Number(req.query.page) || 1;
	const resultsPerPage = 12;
	const sumOfProducts = await Product.countDocuments();
	const totalPages = sumOfProducts / resultsPerPage;

	const products = await Product.find()
		.limit(resultsPerPage)
		.skip(resultsPerPage * (page - 1));

	if (products) res.status(200).json({ products, page, totalPages, resultsPerPage });
	else {
		res.status(404);
		throw new Error("Products not found");
	}
});

const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) res.status(200).json(product);
	else {
		res.status(404);
		throw new Error("Product not found");
	}
});

const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: "Sample Name",
		price: 0,
		user: req.user.id,
		image: "/images/sample.jpg",
		brand: "Sample Brand",
		category: "Sample Category",
		countInStock: 0,
		numReviews: 0,
		description: "Sample Decsription"
	});

	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

const updateProduct = asyncHandler(async (req, res) => {
	const { name, price, image, brand, categorey, countInStock, description } = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.name = name;
		product.price = price;
		product.image = image;
		product.description = description;
		product.brand = brand;
		product.categorey = categorey;
		product.countInStock = countInStock;

		const updatedProduct = await product.save();
		res.status(200).json(updatedProduct);
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});

const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		await product.remove();
		res.status(200).json({ message: "Product removed" });
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});

const addProductReview = asyncHandler(async (req, res) => {
	const { comment, rating } = req.body;

	const product = await Product.findById(req.params.id);
	if (product) {
		const alreadyReviewed = product.reviews.find(
			(review) => review.user.toString() === req.user.id.toString()
		);
		if (alreadyReviewed) {
			res.status(400);
			throw new Error("Product already reviewed");
		}

		let review = {
			name: req.body.name,
			rating,
			comment,
			user: req.user.id
		};

		product.reviews.push(review);

		product.numReviews = product.reviews.length;

		product.rating =
			product.reviews.reduce((acc, review) => review.rating + acc, 0) /
			product.reviews.length;

		review = await product.save();

		res.status(201).json(review);
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});

const searchProduct = asyncHandler(async (req, res) => {
	const products = await Product.find({
		name: {
			$regex: "^" + req.params.keyword,
			$options: "i"
		}
	});

	res.status(200).json(products);
});

const topRatedProducts = asyncHandler(async (req, res) => {
	const topRatedProducts = await Product.find().sort({ rating: -1 }).limit(3);
	res.status(200).json(topRatedProducts);
});

export {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
	addProductReview,
	searchProduct,
	topRatedProducts
};
