import { useContext } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import CartContext from '../Auth/cart-auth';

const productsArr = [
  {
    id:1,
    title: 'Colors',
    price: 100,
    quantity:1,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id:2,
    title: 'Black and white Colors',
    price: 50,
    quantity:1,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    quantity:1,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id:4,
    title: 'Blue Color',
    price: 100,
    quantity:1,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
   {
    id:5,
    title: 'Colors',
    price: 100,
    quantity:1,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id:6,
    title: 'Black and white Colors',
    price: 50,
    quantity:1,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id:7,
    title: 'Yellow and Black Colors',
    price: 70,
    quantity:1,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id:8,
    title: 'Blue Color',
    price: 100,
    quantity:1,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

export default function Products(props) {
   const cartCtx =  useContext(CartContext)
  return (
    <div>
      <Row xs={1} md={2} lg={4} className="g-4">
        {productsArr.map((item, index) => (
          <Col key={item.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle>
                <Button onClick={()=>cartCtx.addProduct(item)}>Add</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
