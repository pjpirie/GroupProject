import React, { useState, Fragment } from 'react';
import './Navbar.css';
import logo from './logo.svg';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Login from './Login/Login';
import loginBG from '../assets/login_bg.png';
import Register from './Register/Register';

Modal.setAppElement('#root');

function Header() {

  const navStyle = {
    color: 'black',
    textDecoration: 'none'
  };

  const [loginmodalIsOpen, loginsetModalIsOpen] = useState(false);
  const [registermodalIsOpen, registersetModalIsOpen] = useState(false);

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">
        <Navbar.Brand href="#home"><img src={logo} className="d-inline-block align-top logo" alt="Website Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link style={navStyle} to="/">
              <li className="nav-link">Home</li>
            </Link>
            <Link style={navStyle} to="/about">
              <li className="nav-link">Our Company</li>
            </Link>
            <Link style={navStyle} to="/modules">
              <li className="nav-link">Modules</li>
            </Link>
            <Link style={navStyle} to="/contact">
              <li className="nav-link">Contact</li>
            </Link>
            <Link style={navStyle} to="/account">
              <li onClick={() => loginsetModalIsOpen(true)}><AccountCircleIcon /></li>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        isOpen={loginmodalIsOpen}
        onRequestClose={() => loginsetModalIsOpen(false)}
        style={{
          overlay: {
            // backgroundColor: 'rgba(33,49,66,0.5)',
            backgroundImage: 'url(' + loginBG + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          },
          content: {
            color: '#213142',
            width: '35vw',
            minWidth: '500px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            bottom: '0',
            right: '0',
            translate: '-50% -50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            padding: '10px'
          }
        }}
      >
        <Login openRegister={() => {
          loginsetModalIsOpen(false)
          registersetModalIsOpen(true)
        }} />
      </Modal>
      <Modal
        isOpen={registermodalIsOpen}
        onRequestClose={() => registersetModalIsOpen(false)}
        style={{
          overlay: {
            // backgroundColor: 'rgba(33,49,66,0.5)',
            backgroundImage: 'url(' + loginBG + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          },
          content: {
            color: '#213142',
            width: '35vw',
            minWidth: '500px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            bottom: '0',
            right: '0',
            translate: '-50% -50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            padding: '10px'
          }
        }}
      >
        <Register />
      </Modal>
    </Fragment>


  )
}

export default Header
