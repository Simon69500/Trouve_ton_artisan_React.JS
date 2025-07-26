import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../assets/logo/Logo.png';
import '../styles/SCSS/components/header.scss';
import { fetchFromServer } from '../api/apiConfig';

const Header = () => {

  // Partie Search de la barre de navigation 
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  // partie navigation menu du header
  const [menuLinks, setMenuLinks] = useState([]);

  useEffect(() =>{
    async function fetchMenu() {
      try {
        const data = await fetchFromServer("/categories")
        setMenuLinks(data);
      } catch(error) {
        console.error("Erreur menu :", error);
      }
    }
    fetchMenu();
  }, [])

  return (

    <Navbar expand="lg" className='navbar'>
      <Container>

        {/* Logo*/}
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" className='logo'/>
        </Navbar.Brand>

          {/* Barre de Recherche*/}
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

        {/* Menu navigation*/}
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="me-auto">
            {menuLinks.map((cat) => (
              <Nav.Link key={cat.id_categorie} as={Link} to={`/categories/${cat.id_categorie}/artisans`}>{cat.nom}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
