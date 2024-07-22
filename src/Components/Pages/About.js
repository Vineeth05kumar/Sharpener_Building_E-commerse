import {Link} from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function About(){
    return(<><h1>welcomee inside About</h1>
    <Nav.Link as={Link} to="/store">Go to store</Nav.Link></>)
}