import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getTopRatedProducts } from "../redux/product/productActions";
import Loader from "./Loader";
import Message from "./Message";

const TopRatedProducts = () => {
	const { topRatedProducts, loading, error } = useSelector((state) => state.productsTopRated);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTopRatedProducts());
	}, [dispatch]);

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant="danger" text={error} />
	) : (
		<>
			<h1 className="mb-3">Top Rated</h1>
			<Carousel pause="hover" variant="dark" className="mb-5">
				{topRatedProducts.map((product) => (
					<Carousel.Item style={{ height: "500px" }}>
						<Image
							src={product.image}
							style={{ height: " 100%", width: "100%", objectFit: "fill" }}
						/>
						<Carousel.Caption>
							<h3>{product.name}</h3>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
};

export default TopRatedProducts;
