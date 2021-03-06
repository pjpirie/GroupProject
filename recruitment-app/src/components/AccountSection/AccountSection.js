import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogged } from '../../actions';

function AccountSection(props) {

    // const [auth, setAuth] = useState(false);
    const isLogged = useSelector(state => state.isLogged);
    const { setLightStyle, navStyle, getLinkStyle, lightStyle} = props;
    const dispatch = useDispatch();



    async function logout() {
        return await fetch('/user/logout', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            }, 
            credentials: 'same-origin'
        })
        .then(data => console.log(data));
        // .then(data => data.json())
        // .then(data => setAuth(data.tokenValid));
    }

    if(isLogged){
        return (
                <Fragment>
                    <Link onClick={() => setLightStyle(false)} style={navStyle} to="/account">
                        <li style={getLinkStyle(lightStyle)} className="nav-link"><AccountCircleIcon /></li>
                    </Link>
                    
                    <Link onClick={() => setLightStyle(true)} style={navStyle} to="/">
                        <li onClick={() => {
                            logout();
                            dispatch(setLogged(false));
                        }} style={getLinkStyle(lightStyle)} className="nav-link">Logout</li>
                    </Link>
                </Fragment>
            );
    }else{
        return (
            <Fragment>
                <Link onClick={() => setLightStyle(false)} style={navStyle} to="/login">
                    <li style={getLinkStyle(lightStyle)} className="nav-link">Login</li>
                </Link>
                <Link onClick={() => setLightStyle(false)} style={navStyle} to="/register">
                    <li style={getLinkStyle(lightStyle)} className="nav-link">Register</li>
                </Link>
            </Fragment>
        );
    }
}

export default AccountSection;