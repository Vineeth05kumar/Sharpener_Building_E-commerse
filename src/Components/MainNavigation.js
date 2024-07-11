import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import Cart from "./Cart/Cart";
import CartContext from "./Context/cart-context";

export default function MainNavigation() {
  const cartCtx = useContext(CartContext);
  const [cartVisible, setCartVisible] = useState(false);

  const showCartItems = () => {
    setCartVisible(true);
  };

  const hideCartItems = () => {
    setCartVisible(false);
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My 1st Project
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">
          Home
          </Nav.Link>
          <Nav.Link as={Link} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Button onClick={showCartItems}>Cart</Button>
        {cartVisible && <Cart items={cartCtx.items} onClose={hideCartItems} />}
      </Container>
    </Navbar>
  );
}
