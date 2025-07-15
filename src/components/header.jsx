import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/logo/Logo.png';
import '../styles/SCSS/components/header.scss';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" height="40" />
        </Navbar.Brand>
        <Form className="d-flex" role="search"  onSubmit={handleSearchSubmit}>
            <FormControl
                type="search"
                placeholder="Recherche"
                className="me-2"
                style={{ width: '150px' }} 
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </Form>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/batiment">Bâtiment</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/fabrication">Fabrication</Nav.Link>
            <Nav.Link as={Link} to="/alimentation">Alimentation</Nav.Link>
            <Nav.Link as={Link} to="/artisans">Artisans</Nav.Link>
            <Nav.Link as={Link} to="/artisansFiche">Liste des Artisans</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
