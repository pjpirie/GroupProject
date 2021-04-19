import React from 'react';
import { Link } from 'react-router-dom';
import AccessImage from '../../assets/access.svg';
import './NoAccess.css';
import './NoAccess.responsive.css';

const NoAccess = () => {
    return (
        <div className="Access__Container">
            <div className='Access__Container__Content' >
            <img src={AccessImage} alt="Not Permitted To Access"/>
            <h1>No Access To This Content, Contact Us To Gain Access</h1>
            <Link to="/contact" className="btn-clearing main-btn">Contact Us</Link>
            </div>
        </div>
    );
}

export default NoAccess;
