import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand as={Link} to="/">
						MobilePro
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="ms-auto" style={{ maxHeight: "100px" }} navbarScroll>
							<Nav.Link as={Link} to="/home">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="cart">
								<i className="fas fa-shopping-cart"></i> Cart
							</Nav.Link>
							<Nav.Link as={Link} to="login">
								<i className="fas fa-user"></i>Sign-In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
