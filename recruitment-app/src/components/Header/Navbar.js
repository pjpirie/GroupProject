import React, { useState, Fragment } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Login from '../Login/Login';
import loginBG from '../../assets/login_bg.png';
import Register from '../Register/Register';

Modal.setAppElement('#root');

function Header() {

  const navStyle = {
    color: 'rgba(0,0,0,1)',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const getLinkStyle = (theme) => {
    if(theme == true){
      return {color: 'rgba(255,255,255,1)'}
    }else{
      return {color: 'rgba(0,0,0,1)'}
    }  
  }

  const [loginmodalIsOpen, loginsetModalIsOpen] = useState(false);
  const [registermodalIsOpen, registersetModalIsOpen] = useState(false);
  const [lightStyle, setLightStyle] = useState(false);

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">
        {/* <Navbar.Brand href="#home"><img src={logo} className="d-inline-block align-top logo" alt="Website Logo" /></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="mr-auto"> */}
          <Nav>
            <Link onClick={() => setLightStyle(true)} style={navStyle} to="/">
              <li style={getLinkStyle(lightStyle)} className="nav-link">Home</li>
            </Link>
            <Link onClick={() => setLightStyle(false)} style={navStyle} to="/company">
              <li style={getLinkStyle(lightStyle)} className="nav-link">Our Company</li>
            </Link>
            <Link onClick={() => setLightStyle(false)} style={navStyle} to="/modules">
              <li style={getLinkStyle(lightStyle)} className="nav-link">Modules</li>
            </Link>
            <Link onClick={() => setLightStyle(false)} style={navStyle} to="/contact">
              <li style={getLinkStyle(lightStyle)} className="nav-link">Contact</li>
            </Link>
            <Link onClick={() => setLightStyle(false)} style={navStyle} to="/account">
              <li style={getLinkStyle(lightStyle)} onClick={() => loginsetModalIsOpen(true)}><AccountCircleIcon /></li>
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
