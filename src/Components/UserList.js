import React from "react";
import { Container, Row, Col, Card, CardHeader, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const UserList = () => {
  return (
    <Container className="mmt-5">
        <Row>
            <Col>
            <h1 style={{font:"-moz-initial"}}>Music</h1>
            </Col>
        </Row>
      <Row className="d-flex min-vh-100 align-items-center">
        {items.map((item, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card style={{ width: "18rem" }}>
              <CardHeader>Album{index + 1}</CardHeader>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  <Button>Add To Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserList;
