import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import Axios from "axios";

const ProductPage = ({ match }) => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetchProduct();
	}, []);

	const fetchProduct = () =>
		Axios.get(`/api/products/${match.params.id}`)
			.then((res) => setProduct(res.data))
			.catch((err) => err);

	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col lg={6}>
					<Image src={product.image} fluid />
				</Col>
				<Col lg={3}>
					<ListGroup variant="flush">
						<ListGroupItem>
							<h1 className="h3">{product.name}</h1>
						</ListGroupItem>
						<Rating value={product.rating} />
						<ListGroupItem>Description: {product.description}</ListGroupItem>
					</ListGroup>
				</Col>
				<Col lg={3}>
					<ListGroup>
						<ListGroupItem>Price: {product.price}</ListGroupItem>
						<ListGroupItem>
							Status: {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
						</ListGroupItem>
						<ListGroupItem>
							<Button
								className="w-100"
								type="button"
								disabled={product.countInStock === 0}>
								Add to cart
							</Button>
						</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		</>
	);
};

export default ProductPage;
