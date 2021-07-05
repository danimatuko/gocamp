import React, { useEffect, useState } from "react";
import { Image, ListGroup, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
	deliverOrder,
	getOrderDetails,
	payOrder,
	resetOrderDetails
} from "../redux/order/orederActions";
import { PayPalButton } from "react-paypal-button-v2";
import { emptyCart } from "../redux/cart/cartActions";
const OrderPage = ({ match }) => {
	const orderId = match.params.id;
	const dispatch = useDispatch();

	const userInfo = useSelector((state) => state.user.userInfo);
	const order = useSelector((state) => state.order);
	const cart = useSelector((state) => state.cart);

	const { orderDetails, error, loading } = order;
	const { shippingAddress } = cart;

	useEffect(() => {
		if (!order || orderDetails._id !== orderId) {
			dispatch(getOrderDetails(orderId));
		}
	}, [orderDetails, orderId, orderDetails.isDelivered]);

	const successPaymentHandler = (paymentResult) => {
		dispatch(payOrder(orderId, paymentResult));
		dispatch(emptyCart());
	};

	const deliverHandler = (id) => {
		dispatch(deliverOrder(id));
	};

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant="danger" text={error} />
	) : (
		<>
			<h1>Order {orderId}</h1>
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Shipping</h2>
							<strong className="me-1">Name:</strong>
							<span>
								{orderDetails.user.first_name} {orderDetails.user.last_name}
							</span>
							<p>
								<strong>Address:</strong>

								{` ${shippingAddress.street}, ${shippingAddress.city},
								 ${shippingAddress.postalCode}, ${shippingAddress.country}`}
							</p>
							{orderDetails.isDelivered ? (
								<Message
									variant={"success"}
									text={`Deleviered on ${orderDetails.deliveredAt}`}
								/>
							) : (
								<Message variant={"danger"} text={`Not Delivered`} />
							)}
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Payment Method</h2>
							<p>
								<strong>Method: {orderDetails.paymentMethod}</strong>
							</p>
							{orderDetails.isPaid ? (
								<Message
									variant={"success"}
									text={`Paid on ${orderDetails.paidAt}`}
								/>
							) : (
								<Message variant={"danger"} text={`Not Paid`} />
							)}
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Order Items</h2>
							{orderDetails.orderItems.length === 0 ? (
								<Message text="Your cart is empty" variant="warning" />
							) : (
								<ListGroup variant="flush">
									{orderDetails.orderItems.map((item) => (
										<ListGroup.Item key={item._id}>
											<Row>
												<Col md={1}>
													<Image src={item.image} alt={item.name} fluid />
												</Col>
												<Col md={6}>
													<Link to={`/product/${item._id}`}>
														{item.name}
													</Link>
												</Col>
												<Col md={4}>
													{item.qty} x ${item.price} =
													{Number(item.qty * item.price).toFixed(2)}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Order Summary</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col>Items</Col>
								<Col>${orderDetails.itemsPrice}</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col>Shipping</Col>
								<Col>${orderDetails.shippingPrice}</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col>Tax</Col>
								<Col>${orderDetails.taxPrice}</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col>Total</Col>
								<Col>${orderDetails.totalPrice}</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							{!orderDetails.isPaid ? (
								<PayPalButton
									amount={orderDetails.totalPrice}
									onSuccess={successPaymentHandler}
								/>
							) : (
								<Button as={Link} to="/profile" className="w-100">
									MY ORDERS
								</Button>
							)}
						</ListGroup.Item>
						{userInfo.isAdmin && orderDetails.isPaid && !orderDetails.isDelivered && (
							<ListGroup.Item>
								<Button
									className="w-100"
									onClick={() => deliverHandler(orderDetails._id)}
								>
									Mark As Delivered
								</Button>
							</ListGroup.Item>
						)}

						<ListGroup.Item>
							{error && <Message variant="danger" text={error} />}
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</>
	);
};

export default OrderPage;
