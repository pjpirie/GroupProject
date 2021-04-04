import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { setAccount, setLightNav, setLogged, setRedirect } from '../../actions';
import './Login.css';
import './Login.responsive.css';


async function LoginUser(credentials) {
    return fetch('/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json());
        // .then(data => document.cookie = "Authorisation=" + JSON.stringify(data) + "; SameSite=None; Secure");
}

async function accountExists(email) {
    const emailJSONObject = { Email: email };
    // console.log("Email: " + email);
    return fetch('/user/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailJSONObject)
    })
        .then(data => data.json());
}

let cookie = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

export default function Login(props) {

    
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(setLightNav(true));
    }, []);

    if(isLogged){
        return <Redirect to='/' />
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if (await !accountExists(Email)) throw ("LoginError: No account with that email address");
            console.log("Submitted");
            let logged_in = await LoginUser({
                Email,
                Password
            });

            console.log(logged_in);
            console.log(logged_in.token);
            if(logged_in.token != undefined){
                dispatch(setLogged());
                dispatch(setAccount(true, logged_in.user));
                dispatch(setRedirect(true, `/`))
            }
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div className="loginPage__Wrapper">
            <div className="loginWrapper">
                <h1 class="sans-heading">LOGIN</h1>
                <form onSubmit={handleSubmit} className="loginForm">
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input id="Pass" type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <p>Need an account?
                        <button 
                        class="btn-clearing alt-btn" 
                        onClick={() => { dispatch(setRedirect(true, `/register`))} }
                                >Sign up here</button></p>
                        <button class=" btn-clearing main-btn" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }