import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">The Generics</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/store">Store</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
