import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <a href="https://www.facebook.com" className="text-white">Facebook</a> | 
            <a href="https://www.spotify.com" className="text-white"> Spotify</a> | 
            <a href="https://www.youtube.com" className="text-white"> YouTube</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
