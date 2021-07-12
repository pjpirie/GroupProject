import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RSDPLOGO from '../../assets/v2/RSDP_LOGO_V2.svg';
import './Navbar.scss';



function Navbar(props){

    useEffect(() => {
        props.checkAuth();
    },[]);

    return(
        <nav className="navbar">
            <div>
                <div className="navbar__logo"><Link to="/"><img src={RSDPLOGO} alt="Recruitment Skills Development Programme Logo" className="navbar-image" /></Link><i className="fab fa-react"></i></div>
            </div>
            <div>
                <ul className="navbar__menu">
                    <Link to='/'>
                        <li className="navbar__item">HOME</li>
                    </Link>
                    <Link to='/modules'>
                        <li className="nav-navbar__item">ABOUT</li>
                    </Link>
                    <Link to='/contact'>
                        <li className="navbar__item">CONTACT</li>
                    </Link>
                </ul>
            </div>
            <div>
                <ul className="navbar__account">
                    <Link to='/login'>
                        <li className="navbar__item">LOGIN</li>
                    </Link>
                    <Link to='/register'>
                        <li className="navbar__item">SIGN UP</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar