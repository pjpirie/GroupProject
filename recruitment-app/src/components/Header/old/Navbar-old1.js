import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLightNav } from '../../actions';
import AccountSection from '../AccountSection/AccountSection';
import logo from '../../assets/logoBlue.png'
import './Navbar.css';



function Navbar(props) {

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

    return (
        <div className="navbar">
            <nav className="nav">
                <div className="nav-logo-div">
                    <Link onClick={() => setLightStyle(false)} style={navStyle} to='/'>
                        <li style={getLinkStyle(isNavLight)} className="nav-link"><img src={logo} alt="Logo img" className="nav-logo" /></li>
                    </Link>
                </div>
                <Link onClick={() => setLightStyle(false)} style={navStyle} to='/'>
                    <li style={getLinkStyle(isNavLight)} className="nav-link">Home</li>
                </Link>
                <Link onClick={() => setLightStyle(false)} style={navStyle} to='/modules'>
                    <li style={getLinkStyle(isNavLight)} className="nav-link">Information</li>
                </Link>
                <Link onClick={() => setLightStyle(false)} style={navStyle} to='/contact'>
                    <li style={getLinkStyle(isNavLight)} className="nav-link">Contact</li>
                </Link>
                <AccountSection getLinkStyle={getLinkStyle} setLightStyle={setLightStyle} navStyle={navStyle} lightStyle={isNavLight}/>
            </nav>
        </div>
    )
}

export default Navbar