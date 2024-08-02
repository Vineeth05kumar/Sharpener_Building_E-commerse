import React, { useContext, useState } from "react";
import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import Cart from "../store/Cart";
import { Link } from "react-router-dom";
import AuthContext from "../Auth/auth-context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleCart = () => setShowCart(!showCart);

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand as={Link} to="/">2ND Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/auth">Login</Nav.Link>
            )}
          </Nav>
          <Nav>
            <Button onClick={handleCart} className="ms-3">Cart</Button>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={showCart} onHide={handleCart} size="lg">
        <Modal.Body>
          <Cart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCart}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
