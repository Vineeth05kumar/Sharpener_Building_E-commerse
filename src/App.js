import React, { useState, useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import UserList from "./Components/UserList";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Context/CartProvider";
import CartContext from "./Components/Context/cart-context";

const App = () => {
  const cartCtx = useContext(CartContext);
  const [cartVisible, setCartVisible] = useState(false);

  const showCartItems = () => {
    setCartVisible(true);
  };

  const hideCartItems = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          <Button onClick={showCartItems}>Cart</Button>
          {cartVisible && (
            <Cart items={cartCtx.items} onClose={hideCartItems} />
          )}
        </Container>
      </Navbar>
      <UserList/>
    </CartProvider>
  );
};

export default App;
