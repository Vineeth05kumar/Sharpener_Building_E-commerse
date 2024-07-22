import React, { useContext } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import CartContext from "../Context/cart-context";
const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {cartCtx.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ maxWidth: "100px" }}
                    />
                  </td>
                  <td>${item.price}</td>
                  <td>{item.quantity}<Button variant="danger" onClick={()=>cartCtx.deleteItem(item.id)}>Remove</Button></td>
                  <td>{cartCtx.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
