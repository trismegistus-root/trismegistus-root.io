import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

//You were working on this prticular page and trying to get this component to pass to arent and then to carousel
const Menu = () => {
    const [view, setView] = useState('Right Wing')

    return (
    <>
      <Navbar collapseOnSelect fixed = 'top' bg='light' variant='light'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Container>
            <Navbar.Brand href = "#home">Headlines Without Context</Navbar.Brand>
            <Container>
            <Navbar.Text>
                Get the news your way
            </Navbar.Text>
            </Container>
          </Container>
          <Navbar.Collapse id="responsive-navbar-nav">
        <Container>
          <Nav fill variant='tabs' className="justify-content-end" activeKey="/right">
            <Nav.Item>
                <Nav.Link>Left</Nav.Link>
                </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>setView('Libertarian')} eventKey="libertarian">Libertarian</Nav.Link>
                </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>setView('Right Wing')} eventKey="right">Right</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
        <Container>
            <Navbar.Text>
            Viewing as:  {view} 
            </Navbar.Text>
        </Container>

            </Navbar.Collapse>
    </Navbar>
    </>
    );
}

export default Menu;