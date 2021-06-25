import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import ProfilePage from "./pages/ProfilePage";
import UsersList from "./pages/UsersList";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useSelector } from "react-redux";
import AdminRoute from "./components/AdminRoute";

const App = () => {
	// const user = useSelector((state) => state.user);
	// const { userInfo } = user;
	return (
		<Router>
			<div className="App">
				<Header />
				<main className="py-5" style={{ minHeight: "85vh" }}>
					<Container>
						<Route path="/" exact component={HomePage} />
						<Route path="/profile" exact component={ProfilePage} />
						<Route path="/product/:id" exact component={ProductPage} />
						<Route path={`/cart/:id?`} component={CartPage} />
						<Route path={`/login`} component={LoginPage} />
						<Route path={`/register`} component={RegisterPage} />
						<Route path={`/shipping`} component={ShippingPage} />
						<Route path={`/payment`} component={PaymentPage} />
						<Route path={`/place-order`} component={PlaceOrderPage} />
						<Route path={`/order/:id`} component={OrderPage} />
						<AdminRoute path={`/admin/users`} component={UsersList} />
					</Container>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
