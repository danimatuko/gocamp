import React, { useEffect, useState } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getAllProducts } from "../redux/product/actions";

const ProductsListPage = ({ history, match }) => {
	const dispatch = useDispatch();
	//const { users, loading, error } = useSelector((state) => state.admin);
	const { loading, error, products } = useSelector((state) => state.productList);
	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	return (
		<>
			<Row className="mb-3">
				<Col>
					<h1>Products</h1>
				</Col>
				<Col className="text-end">
					<Button>
						<i className="fas fa-plus me-1"></i>Add Product
					</Button>
				</Col>
			</Row>

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger" text={error} />
			) : (
				<Table striped bordered hover responsive className="table-sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>NAME</th>
							<th>PRICE</th>
							<th>CATEGORY</th>
							<th>BRAND</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product._id}>
								<td>{product._id}</td>
								<td>${product.price}</td>
								<td>{product.name}</td>
								<td>{product.category}</td>
								<td>{product.brand}</td>

								<td>
									<Button
										as={Link}
										to={`/admin/product/${product._id}/edit`}
										className="btn-sm"
									>
										<i className="fas fa-edit"></i>
									</Button>
									<Button
										variant="danger"
										className="btn-sm"
										//onClick={() => dispatch(deleteProduct(product._id))}
									>
										<i className="fas fa-trash"></i>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default ProductsListPage;
