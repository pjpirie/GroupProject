import React, { useEffect, useState } from 'react';
import {useWindowSize} from '../../func/useWindowSize.js';
import { NavLink } from 'react-router-dom';
import RSDPLOGO from '../../assets/v2/NewLogoHeader.svg';
import './Navbar.scss';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';



function Navbar(props){

    const [isMobile, setMobile] = useState(window.innerWidth <= 900 ? true : false)
    const [menuOpen, setMenuOpen] = useState(false)
    let windowSize = useWindowSize();

    useEffect(() => { 
        props.checkAuth();
    },[]);

    useEffect(() => { 
        setMobile(window.innerWidth <= 900 ? true : false)
    },[windowSize.width]);

    
    const toggleMenu = (evt) => {
        setMenuOpen(!menuOpen);
    }

    if(!isMobile){
        return(
            <nav className={(isMobile ? 'mobile': '') + " navbar"}>
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
    }else{
        return(
            <nav className="navbar">
                <div className="navbar__main__container">
                    <div>
                        <div className="navbar__logo"><NavLink exact to="/"><img src={RSDPLOGO} alt="Recruitment Skills Development Programme Logo" className="navbar-image" /></NavLink><i className="fab fa-react"></i></div>
                    </div>
                    <div>
                        {!menuOpen ? (<MenuIcon onClick={toggleMenu} />) : (<CloseIcon onClick={toggleMenu} />)}
                        
                    </div>
                </div>
                <div className={(menuOpen ? 'mobile': '') + " navbar__menu__container"} >
                        <ul className="navbar__menu">
                            <div>
                                {!menuOpen ? (<MenuIcon onClick={toggleMenu} />) : (<CloseIcon onClick={toggleMenu} />)}
                            </div>
                            <NavLink exact activeClassName="is-active" to='/'>
                                <li className="navbar__item" onClick={toggleMenu}>HOME</li>
                            </NavLink>
                            <NavLink activeClassName="is-active" to='/modules'>
                                <li className="nav-navbar__item" onClick={toggleMenu}>ABOUT</li>
                            </NavLink>
                            <NavLink activeClassName="is-active" to='/contact'>
                                <li className="navbar__item" onClick={toggleMenu}>CONTACT</li>
                            </NavLink>
                        </ul>
                        <ul className="navbar__account">
                            <NavLink to='/login'>
                                <li className="navbar__item" onClick={toggleMenu}>LOGIN</li>
                            </NavLink>
                            <NavLink to='/register'>
                                <li className="navbar__account__button" onClick={toggleMenu}>SIGN UP</li>
                            </NavLink>
                        </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar