import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col xs={6}>
            <Card className="shadow-lg">
              <Card.Header className="p-3" style={{backgroundColor:"orange"}}>
                <h2>Register</h2>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Enter EmailAddress"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group>
                   <Button variant="warning" type="submit">Register</Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
