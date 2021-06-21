import React, { useEffect, useState } from "react";
import { Image, ListGroup, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getOrderDetails, payOrder } from "../redux/order/orederActions";
import Axios from "axios";
import { PayaplButton } from "react-paypal-button-v2";
import { ORDER_PAY_RESET } from "../redux/order/types";

const OrderPage = ({ match }) => {
	const orderId = match.params.id;
	const dispatch = useDispatch();

	const { orderDetails, error, loading } = useSelector((state) => state.order);
	const userInfo = useSelector((state) => state.user.userInfo);
	const { shippingAddress } = orderDetails;

	const [sdkReady, setSDKready] = useState(false);

	useEffect(() => {
		const addPaypalScript = async () => {
			const { data: clientId } = await Axios.get("/api/config/paypal");
			const script = document.createElement("script");
			script.type = "text/javscript";
			script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
			script.async = true;
			script.onload = () => {
				setSDKready(true);
			};
			document.body.appendChild(script);
		};

		if (orderDetails.isPaid) {
			dispatch({ type: ORDER_PAY_RESET });
			dispatch(getOrderDetails(orderId));
		} else {
			if (!window.paypal) {
				addPaypalScript();
			} else {
				setSDKready(true);
			}
		}

		if (!orderDetails || orderDetails._id !== orderId) {
			dispatch(getOrderDetails(orderId));
		}
	}, [orderDetails, orderId]);

	const successPaymentHandler = (paymentResult) => {
		console.log(paymentResult);
		dispatch(payOrder(orderId, paymentResult));
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
								{userInfo.first_name} {userInfo.last_name}
							</span>
							<p>
								<strong>Address:</strong>
								{` ${shippingAddress.street}, ${shippingAddress.city},
								 ${shippingAddress.postalCode}, ${shippingAddress.country}`}
							</p>
							{orderDetails.isDeleviered ? (
								<Message
									variant={"success"}
									text={`Deleviered on ${orderDetails.delevierdAt}`}
								/>
							) : (
								<Message variant={"danger"} text={`Not Deleviered`} />
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
						{!orderDetails.isPaid && (
							<ListGroup.Item>
								{loading && <Loader />}
								{!sdkReady ? (
									<Loader />
								) : (
									<PayaplButton
										amount={orderDetails.totalPrice}
										onSuccess={successPaymentHandler}
									/>
								)}
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
