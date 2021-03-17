import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
            <h3>Ready to improve your skills?</h3>
            <Button className="footerBtn">Sign Up!</Button>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 col-sm-6">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          {/* Column 3 */}
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled link-col">
              <h3>Quick Links</h3>
              <Link to="/" className="footer-nav">
                <li>Home</li>
              </Link>
              <Link to="/modules" className="footer-nav">
                <li>Course Information</li>
              </Link>
              <Link to="/contact" className="footer-nav">
                <li>Contact</li>
              </Link >
              <Link to="/" className="footer-nav">           
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center margin-bottom-reset">
            &copy;{new Date().getFullYear} Recruitment App
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer