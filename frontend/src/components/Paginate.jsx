import React from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Paginate = ({ pageNumber }) => {
	const { page, totalPages } = useSelector((state) => state.productList);

	return (
		totalPages > 1 && (
			<Pagination>
				{[...Array(totalPages).keys()].map((pageNum) => (
					<Pagination.Item key={pageNum} active={pageNum + 1 == pageNumber} as={Link}>
						<Link to={`/?page=${pageNum + 1}`}>{pageNum + 1}</Link>
					</Pagination.Item>
				))}
			</Pagination>
		)
	);
};

export default Paginate;
