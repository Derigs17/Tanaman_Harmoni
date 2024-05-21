import { Navbar, Nav, Button, Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 

import profil from '../images/profil.png';
import logonav from '../images/logonav.png';
import harmoni from '../images/harmoni.png';



const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-rounded" style={{ backgroundColor: '#105C17' }}>
        <Container fluid>
          <Navbar.Brand>
            <img src={logonav} alt='logo' style={{ marginLeft: '20px', width: '35px', height: '35px', paddingBottom: '5px' }} />
          </Navbar.Brand>
          <Navbar.Brand>
            <img src={harmoni} alt='logo' style={{ marginLeft: '10px', width: '125px', height: '25px', paddingBottom: '10px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav variant="underline" defaultActiveKey="/home" className="navbar-custom mx-auto me-auto me-2 my-2 my-lg-0" navbarScroll>
              <NavLink to="/" exact="true" className="nav-link custom-nav-link" activeclassname="active">Beranda</NavLink>
              <NavLink to="/produk" className="nav-link custom-nav-link" activeclassname="active">Produk</NavLink>

            </Nav>
            <Form className="d-flex mb-2 mb-lg-0" style={{ marginRight: '20px' }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <NavLink to="/profile" style={{ textDecoration: 'none' }}>
              <Navbar.Brand className="logo-profile mt-2 mt-lg-0">
                <img src={profil} alt='logo' />
              </Navbar.Brand>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
