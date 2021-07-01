import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getProductDetails, updateProduct } from "../redux/product/productActions";

const ProductEditPage = ({ match, history }) => {
	const productId = match.params.id;
	const { product, loading, error } = useSelector((state) => state.productDetails);
	const {
		newProduct,
		loading: loadingUpdate,
		error: errorUpdate
	} = useSelector((state) => state.productUpdate);
	const dispatch = useDispatch();

	// LOCAL STATE
	const initialState = {
		name: "",
		price: 0,
		image: "",
		brand: "",
		category: "",
		countInStock: 0,
		description: ""
	};

	const [updatedProduct, setuUpdatedProduct] = useState(initialState);

	useEffect(() => {
		if (productId != product._id) {
			dispatch(getProductDetails(match.params.id));
		} else {
			setuUpdatedProduct(product);
		}
	}, [match.params.id, product]);

	const handleChange = ({ name, value }) => {
		setuUpdatedProduct({ ...updatedProduct, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const product = updatedProduct;
		dispatch(updateProduct(product));
		history.push("/admin/products");
	};

	const { name, price, image, brand, category, countInStock, description } = updatedProduct;

	return (
		<FormContainer>
			<h1>Edit Product</h1>
			{error || (errorUpdate && <Message variant="danger" text={error | errorUpdate} />)}
			{loading || (loadingUpdate && <Loader />)}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="name">
					<Form.Label> Name</Form.Label>
					<Form.Control
						name="name"
						type="text"
						value={name}
						onChange={(e) => handleChange(e.target)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="price">
					<Form.Label>Price</Form.Label>
					<Form.Control
						type="number"
						name="price"
						type="text"
						value={price}
						onChange={(e) => handleChange(e.target)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="image">
					<Form.Label>Image</Form.Label>
					<Form.Control
						name="image"
						type="text"
						value={image}
						onChange={(e) => handleChange(e.target)}
					></Form.Control>
				</Form.Group>
				<Form.Label>Brand</Form.Label>
				<Form.Group controlId="brand">
					<Form.Control
						name="brand"
						type="text"
						value={brand}
						onChange={(e) => handleChange(e.target)}
					></Form.Control>
				</Form.Group>
				<Form.Label>Count In Stock</Form.Label>
				<Form.Group controlId="countInStock">
					<Form.Control
						name="countInStock"
						type="text"
						value={countInStock}
						onChange={(e) => handleChange(e.target)}
					></Form.Control>
				</Form.Group>
				<Form.Label>Category</Form.Label>
				<Form.Group controlId="category">
					<Form.Control
						name="category"
						type="text"
						value={category}
						onChange={(e) => handleChange(e.target)}
					></Form.Control>
				</Form.Group>
				<Form.Label>Description</Form.Label>
				<Form.Group controlId="description">
					<Form.Control
						name="description"
						type="text"
						value={description}
						onChange={(e) => handleChange(e.target)}
					></Form.Control>
				</Form.Group>
				<Button type="submit" variant="primary" className="mt-3">
					Update
				</Button>
			</Form>
		</FormContainer>
	);
};

export default ProductEditPage;
