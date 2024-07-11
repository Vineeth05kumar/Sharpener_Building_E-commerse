import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1>The Generics</h1>
          <Button variant="primary">Get our Latest Album</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>TOURS</h2>
          <ul>
            <li>JUL 16 DETROIT, MI - DTE ENERGY MUSIC THEATRE <Button variant="link">BUY TICKETS</Button></li>
            <li>JUL 19 TORONTO, ON - BUDWEISER STAGE <Button variant="link">BUY TICKETS</Button></li>
            <li>JUL 22 BRISTOW, VA - JIGGY LUBE LIVE <Button variant="link">BUY TICKETS</Button></li>
            <li>JUL 29 PHOENIX, AZ - AK-CHIN PAVILION <Button variant="link">BUY TICKETS</Button></li>
            <li>AUG 2 LAS VEGAS, NV - T-MOBILE ARENA <Button variant="link">BUY TICKETS</Button></li>
            <li>AUG 7 CONCORD, CA - CONCORD PAVILION <Button variant="link">BUY TICKETS</Button></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
