import React, { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import UserList from "./Components/UserList";
import Cart from "./Components/Cart/Cart";
// import Modal from './Components/Modal';
// import Container from 'react-bootstrap/Container';

const App = () => {
  const[cart,setCart] = useState(false);

  const showCartItems=()=>{
    console.log("cartttt")
   setCart(true);
  }

  // const cartCloseHandler =()=>{
  //   setCart(false);
  // }

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
           <Button onClick={showCartItems}>Cart</Button>
        </Container>
      </Navbar>
    <UserList />
    {cart && <Cart/>}
    </div>
  );
};

export default App;
