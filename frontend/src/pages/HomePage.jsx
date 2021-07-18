import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/product/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";

const HomePage = ({ match, location }) => {
	const { products, loading, error } = useSelector((state) => state.productList);
	const dispatch = useDispatch();
	const pageNumber = location.search.split("=")[1] || 1;
	useEffect(() => {
		dispatch(getAllProducts(pageNumber));
	}, [dispatch, pageNumber]);

	return (
		<div>
			<h1>Lateset products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger" text={error} />
			) : (
				<>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate pageNumber={pageNumber} />
				</>
			)}
		</div>
	);
};

export default HomePage;
