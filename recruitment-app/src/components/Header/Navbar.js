import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccountSection from '../AccountSection/AccountSection';
import './Navbar.css'
import { useSelector,useDispatch } from 'react-redux';
import {setLightNav} from '../../actions';



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