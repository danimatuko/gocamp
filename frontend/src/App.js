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
import UsersListPage from "./pages/UsersListPage";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminRoute from "./components/AdminRoute";
import EditUserPage from "./pages/EditUser";
import ProductsListPage from "./pages/ProductsListPage";
import ProductEditPage from "./pages/ProductEditPage";
import OrdersListPage from "./pages/OrdersListPage";
import productSearchReducer from "./redux/product/productSearchReducer";
import ProductSearchResults from "./pages/ProductsSearchResults";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Header />
				<main className="py-5" style={{ minHeight: "85vh" }}>
					<Container>
						<Route path={"/"} exact component={HomePage} />
						<Route path="/products/search=:keyword" component={ProductSearchResults} />
						<Route path="/profile" exact component={ProfilePage} />
						<Route path="/product/:id" exact component={ProductPage} />
						<Route path={`/cart/:id?`} component={CartPage} />
						<Route path={`/login`} component={LoginPage} />
						<Route path={`/register`} component={RegisterPage} />
						<Route path={`/shipping`} component={ShippingPage} />
						<Route path={`/payment`} component={PaymentPage} />
						<Route path={`/place-order`} component={PlaceOrderPage} />
						<Route path={`/order/:id`} component={OrderPage} />
						<AdminRoute path={`/admin/users`} component={UsersListPage} />
						<AdminRoute path={`/admin/user/:id/edit`} component={EditUserPage} />
						<AdminRoute path={`/admin/products`} component={ProductsListPage} />
						<AdminRoute path={`/admin/product/:id/edit`} component={ProductEditPage} />
						<AdminRoute path={`/admin/orders`} component={OrdersListPage} />
					</Container>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
