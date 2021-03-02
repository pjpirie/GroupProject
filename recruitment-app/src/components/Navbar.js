import React from 'react';
import './Navbar.css';
import logo from './logo.svg';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  return (
  <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">
    <Navbar.Brand href="#home"><img src={logo} className="d-inline-block align-top logo" alt="Website Logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#" className="nav-link">Home</Nav.Link>
        <Nav.Link href="#" className="nav-link">Our Company</Nav.Link>
        <Nav.Link href="#" className="nav-link">Modules</Nav.Link>
        <Nav.Link href="#" className="nav-link">Contact</Nav.Link>
        <Nav.Link href="#"><AccountCircleIcon /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header
