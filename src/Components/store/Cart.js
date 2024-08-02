import React, { useContext } from "react";
import CartContext from "../Auth/cart-auth";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Cart() {
  const { cart, removeProduct, totalAmount, totalQuantity } = useContext(CartContext);

  return (
    <Container className="mt-4">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Row>
          {cart.map((item) => (
            <Col key={item.id} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    Price: ${item.price.toFixed(2)}
                  </Card.Text>
                  <Card.Text>Q:{item.quantity}</Card.Text>
                  <Button variant="danger" onClick={() => removeProduct(item.id)}>Remove</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col xs={12}>
            <div className="mt-4">
              <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
              <h4>Total Quantity: {totalQuantity}</h4>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Cart;
