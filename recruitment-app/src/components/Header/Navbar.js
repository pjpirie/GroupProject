import React, { useEffect, useState, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLightNav } from '../../actions';
import AccountSection from '../AccountSection/AccountSection';
import logo from '../../assets/logoBlue.png'
import menu from '../../assets/menu.svg'
import './Navbar.css';



function Navbar(props){

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

    const dispatch = useDispatch();
    let isNavLight = useSelector(state => state.isLightNav);
    // const [loginmodalIsOpen, loginsetModalIsOpen] = useState(false);
    // const [registermodalIsOpen, registersetModalIsOpen] = useState(false);
    const setLightStyle = (data) => {
        dispatch(setLightNav(data))
    }

    useEffect(() => {
        props.checkAuth();
    },[]);


    const [mobile, setMobile] = useState(false)

    const handleClick = () =>{
        setMobile(!mobile)
    }


    return(
        <nav className="NavbarItems">
            <div className="navbar-logo"><img src={logo} alt="Logo" className="navbar-image" /><i className="fab fa-react"></i></div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={mobile ? 'fas fa-times' : 'fas fa-bars'}><img src={menu} alt="-" className="menu-image" /></i>
            </div>
            <ul className={mobile ? 'nav-menu active' : 'nav-menu'}>
                {/* {MenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })} */}
                <Link onClick={() => setLightStyle(false)} style={navStyle} to='/'>
                    <li style={getLinkStyle(isNavLight)} onClick={handleClick} className="nav-links">Home</li>
                </Link>
                <Link onClick={() => setLightStyle(false)} style={navStyle} to='/modules'>
                    <li style={getLinkStyle(isNavLight)} onClick={handleClick} className="nav-links">Information</li>
                </Link>
                <Link onClick={() => setLightStyle(false)} style={navStyle} to='/contact'>
                    <li style={getLinkStyle(isNavLight)} onClick={handleClick} className="nav-links">Contact</li>
                </Link>
                <Link onClick={() => setLightStyle(false)} style={navStyle} to='/login'>
                    <li style={getLinkStyle(isNavLight)} onClick={handleClick} className="nav-links">Login</li>
                </Link>
                <Link onClick={() => setLightStyle(false)} style={navStyle} to='/register'>
                    <li style={getLinkStyle(isNavLight)} onClick={handleClick} className="nav-links">Register</li>
                </Link>
                {/* <AccountSection getLinkStyle={getLinkStyle} setLightStyle={setLightStyle} navStyle={navStyle} lightStyle={isNavLight}/> */}
            </ul>
        </nav>
    )
}

export default Navbar
