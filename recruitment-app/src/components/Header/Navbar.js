import React from 'react';
import './Navbar.css';
import logo from '../logo.svg';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom';

function Header() {
  return (
  <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">
    <Navbar.Brand href="#home"><img src={logo} className="d-inline-block align-top logo" alt="Website Logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#" className="nav-link" to="/">Home</Nav.Link>
        <Nav.Link href="#" className="nav-link" to="/company">Our Company</Nav.Link>
        <Nav.Link href="#" className="nav-link" to="/modules">Modules</Nav.Link>
        <Nav.Link href="#" className="nav-link" to="/contact">Contact</Nav.Link>
        <Nav.Link href="#"><AccountCircleIcon /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header
