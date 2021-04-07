import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRedirect } from '../../actions';
import logo from '../../assets/logoWhite.png';
import './Footer.css';
import './Footer.responsive.css';

function Footer() {
  const dispatch = useDispatch();
    
  return (
    <div className="footer-main">
      <div className="footer__container">
          {/* Column 1 */}
          <div className="col">
            <h3>Ready to improve your skills?</h3>
            <Button  
            onClick={() => { dispatch(setRedirect(true, `/register`))} } 
            className="footerBtn"
            >Sign Up!</Button>
          </div>
          {/* Column 2 */}
          <div className="col">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          {/* Column 3 */}
          <div className="col">
            <ul className="list-unstyled link-col">
              <h3>Quick Links</h3>
              <Link to="/" className="footer-nav">
                <li className="footer-nav-links">Home</li>
              </Link>
              <Link to="/modules" className="footer-nav">
                <li className="footer-nav-links">Course Information</li>
              </Link>
              <Link to="/contact" className="footer-nav">
                <li className="footer-nav-links">Contact</li>
              </Link >
              <Link to="/privacy" className="footer-nav">           
                <li className="footer-nav-links">Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-xs-center margin-bottom-reset">
            &copy;{new Date().getFullYear} Recruitment App
          </p>
      </div>      
    </div>
  );
}

export default Footer;