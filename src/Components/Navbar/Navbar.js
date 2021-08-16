import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch} from 'react-redux';
import * as action from '../../Redux_Logic/actiontypes';

//You were working on this prticular page and trying to get this component to pass to parent and then to carousel
const Menu = () => {
    const viewSelector = useSelector((state)=>state.view);
    const viewDispatcher = useDispatch();
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
                <Nav.Link onClick={()=>viewDispatcher({type: action.LEFT})}>Left</Nav.Link>
                </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>viewDispatcher({type: action.LIBERTARIAN})}>Libertarian</Nav.Link>
                </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=> viewDispatcher({type: action.RIGHT})}>Right</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
        <Container>
            <Navbar.Text>
            Viewing as:  {viewSelector} 
            </Navbar.Text>
        </Container>

            </Navbar.Collapse>
    </Navbar>
    </>
    );
}

export default Menu;