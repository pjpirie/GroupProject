import Logo from '../../assets/v2/RSDP_LOGO_V2_WHITE.svg';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return(
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__text">
                    <h1 className="footer__container__text__word">PREPARE TO SUCCEED</h1>
                </div>
                <div className="footer__container__logo">
                    <img src={Logo} alt="RSDP" className="footer__container__logo__image" /> <br />
                    <Link to="/privacy" className="footer__container__logo__priv">Privacy Policy</Link>
                </div>
            </div>
            <div className="footer__xpc">
                <p>© XPC INTERNATIONAL  </p>
            </div>
        </div>
    )
}

export default Footer;