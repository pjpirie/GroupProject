import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import Modal from 'react-modal';
import AccountSection from '../AccountSection/AccountSection'

Modal.setAppElement('#root');

const navStyle = {
  color: 'rgba(0,0,0,1)',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const getLinkStyle = (theme) => {
  if(theme === true){
    return {color: 'rgba(255,255,255,1)'}
  }else{
    return {color: 'rgba(0,0,0,1)'}
  }  
}





function Header(props) {
  
  // const [loginmodalIsOpen, loginsetModalIsOpen] = useState(false);
  // const [registermodalIsOpen, registersetModalIsOpen] = useState(false);
  const [lightStyle, setLightStyle] = useState(true);

  useEffect(() => {
    props.checkAuth();
  },[]);

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">        
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
            <AccountSection getLinkStyle={getLinkStyle} setLightStyle={setLightStyle} navStyle={navStyle} lightStyle={lightStyle}/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>




      {/* <Modal
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
      </Modal> */}
    </Fragment>
  )
}

export default Header
