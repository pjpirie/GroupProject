import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import RSDPLOGO from '../../assets/v2/NewLogoHeader.svg';
import './Navbar.scss';



function Navbar(props){

    useEffect(() => {
        props.checkAuth();
    },[]);

    return(
        <nav className="navbar">
            <div>
                <div className="navbar__logo"><NavLink exact to="/"><img src={RSDPLOGO} alt="Recruitment Skills Development Programme Logo" className="navbar-image" /></NavLink><i className="fab fa-react"></i></div>
            </div>
            <div>
                <ul className="navbar__menu">
                    <NavLink exact activeClassName="is-active" to='/'>
                        <li className="navbar__item">HOME</li>
                    </NavLink>
                    <NavLink activeClassName="is-active" to='/modules'>
                        <li className="nav-navbar__item">ABOUT</li>
                    </NavLink>
                    <NavLink activeClassName="is-active" to='/contact'>
                        <li className="navbar__item">CONTACT</li>
                    </NavLink>
                </ul>
            </div>
            <div>
                <ul className="navbar__account">
                    <NavLink to='/login'>
                        <li className="navbar__item">LOGIN</li>
                    </NavLink>
                    <NavLink to='/register'>
                        <li className="navbar__account__button">SIGN UP</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar