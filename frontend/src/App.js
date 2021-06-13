import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Header />
				<main className="py-5" style={{ minHeight: "85vh" }}>
					<Container>
						<Route path="/" exact component={HomePage} />
						<Route path="/product/:id" exact component={ProductPage} />
						<Route path={`/cart/:id?`} component={CartPage} />
					</Container>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
