import Logo from '../../assets/SVG/WhiteLogo.svg';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
    return(
        <div className="footer">
            <h1>PREPARE TO SUCCEED</h1>
            <div className="footer__brand">
                <img src={Logo} alt="RSDP Logo"/>
                <div className="footer__brand__text">
                    
                    {/* <NavLink activeClassName="is-active" to='/privacy'>
                        <h4>Privacy Policy</h4>
                    </NavLink> */}
                    <h3>© XPC International Ltd. </h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;