import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, ListGroupItem, Button, Form } from "react-bootstrap";
import Rating from "../components/Rating";
import { getProductDetails } from "../redux/product/actions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ProductPage = ({ match, history }) => {
	const { product, loading, error } = useSelector((state) => state.productDetails);
	const dispatch = useDispatch();
	const [qty, setQty] = useState(0);

	useEffect(() => {
		dispatch(getProductDetails(match.params.id));
	}, [match]);

	const addToCart = () => {
		history.push(`/cart/${match.params.id}/qty?=${qty}`);
	};

	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message />
			) : (
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
							<ListGroupItem>Price: ${product.price}</ListGroupItem>
							<ListGroupItem>
								Status: {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
							</ListGroupItem>
							{product.countInStock > 0 && (
								<ListGroupItem>
									<Row className="align-items-center">
										<Col sm={3} className="me-2">
											Quantity:
										</Col>
										<Col sm={4}>
											<Form.Control
												size="sm"
												type="number"
												min="0"
												max={product.countInStock}
												value={qty}
												onChange={(e) =>
													setQty(e.target.value)
												}></Form.Control>
										</Col>
									</Row>
								</ListGroupItem>
							)}
							<ListGroupItem>
								<Button
									className="w-100"
									type="button"
									disabled={product.countInStock == 0 || qty == 0}
									onClick={(e) => addToCart()}>
									Add to cart
								</Button>
							</ListGroupItem>
						</ListGroup>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductPage;
