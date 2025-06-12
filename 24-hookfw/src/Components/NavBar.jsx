import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router,Routes,Route, Link, useNavigate} from 'react-router-dom';

import { FaCartPlus } from "react-icons/fa";
function NavBar() {

 let navigate = useNavigate()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Mr Jawadhu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Link to="/" style={{textDecoration:"none",margin:"7px"}}>Home</Link>
            <Link to="contacts" style={{textDecoration:"none",margin:"7px"}}>Singn-Up</Link>
            <Link to={`login`} style={{textDecoration:"none",margin:"7px"}}>login</Link>
            <Link to="main" style={{textDecoration:"none",margin:"7px"}}>main</Link>
            <Link to="product" style={{textDecoration:"none",margin:"7px"}}>product</Link>
            {/* <Link to="about">about</Link> */}
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              
              Link
            </Nav.Link>
          </Nav>
<Button variant='danger' onClick={()=>navigate("/wishlist")}><FaCartPlus style={{
  // width:"35px",
  // height:"35px",
  color:"orange",
  // margin:"5px"

}}/></Button>
          <Form className="d-flex">
            
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;