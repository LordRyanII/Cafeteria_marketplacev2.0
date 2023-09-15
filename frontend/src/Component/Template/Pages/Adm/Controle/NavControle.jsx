import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './NavControle.css'

function OffcanvasExample() {
  return (
    <Navbar expand="false" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Menu Adm</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Gerenciamento</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link><Link to="/Adm/CadastroProdutos" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faBell} />Notificações</Link></Nav.Link>
              <hr />
              <Nav.Link><Link to="/Adm/CadastroProdutos" style={{ textDecoration: 'none' }}>Cadastro de Produtos</Link></Nav.Link>
              <hr />
              <Nav.Link><Link to="/Adm/EstoqueProdutos" style={{ textDecoration: 'none' }}>Conferir Estoque</Link></Nav.Link>
              <hr />
              <NavDropdown
                title="Logística"
                id="offcanvasNavbarDropdown1"
                className="animated-dropdown" // Adicione a classe CSS aqui
              >
                <NavDropdown.Item><Link to="/CadastroUser" style={{ textDecoration: 'none' }}>Envio de produtos</Link></NavDropdown.Item>
                <hr />
                <NavDropdown.Item><Link to="/CadastroUser" style={{ textDecoration: 'none' }}>Notas fiscais</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Conta"
                id="offcanvasNavbarDropdown2"
                className="animated-dropdown" // Adicione a classe CSS aqui
              >
                <NavDropdown.Item><Link to="/CadastroUser" style={{ textDecoration: 'none' }}>Alterar dados</Link></NavDropdown.Item>
                <hr />
                <NavDropdown.Item><Link to="/CadastroUser" style={{ textDecoration: 'none' }}>Notas fiscais</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
