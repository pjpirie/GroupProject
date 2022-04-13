import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { setAlert, setLightNav } from '../../actions';
import './Register.scss';
import './Register.responsive.css';




export default function Register() {
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(setLightNav(false));
    }, []);

    let PasswordsMatch = false;
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [DateOfBirth, setDateOfBirth] = useState();
    const [redirect, setRedirect] = useState(false);

    async function RegisterUser(credentials) {
        return fetch('https://rsdp-backend.herokuapp.com/user/register', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
            .then(() => setRedirect(true));
    }

    const handleSubmit = async e => {
        checkMatch(document.getElementById("confirmPass").value);
        e.preventDefault();
        try {
            if (!PasswordsMatch) throw ("PasswordError: Passwords Don't Match");
            console.log("Submitted");
            const token = await RegisterUser({
                FirstName,
                LastName,
                Email,
                Password,
                DateOfBirth
            });

            if(token.error === undefined || token.error === null){
                dispatch(setAlert(true, {AlertTitle: 'Register Error', AlertMessage: token.error}));
            }
        } catch (e) {
            console.error(e);
        }
    }

    const checkMatch = p => {
        p === Password ? PasswordsMatch = true : PasswordsMatch = false;
        // console.table([p, Password, PasswordsMatch]);
        
        if(PasswordsMatch == false){
            dispatch(setAlert(true, {AlertTitle: 'Edit Error', AlertMessage: "Passwords Don't Match"}));
        }
    }
    if(redirect){
        return <Redirect to='/login'/>
    }

    return (
        
        <div className="registerPage__Wrapper">
            <div className="registerWrapper">
                <h1 className="sans-heading">Please Register</h1>
                <form onSubmit={handleSubmit} className="registerForm">
                    <div className="names">
                        <label>
                            <p>First Name</p>
                            <input type="text" onChange={e => setFirstName(e.target.value)} required />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input type="text" onChange={e => setLastName(e.target.value)} required />
                        </label>
                    </div>
                    <label>
                        <p>Email</p>
                        <input type="email" onChange={e => setEmail(e.target.value.toLowerCase())} required />
                    </label>
                    <label>
                        <p>Password</p>
                        <input id="Pass" type="password" onChange={e => setPassword(e.target.value)} required />
                    </label>
                    <label>
                        <p>Confirm Password</p>
                        <input id="confirmPass" type="password" required />
                    </label>
                    <label>
                        <p>Date of Birth</p>
                        <input type="date" onChange={e => setDateOfBirth(e.target.value)} required />
                    </label>
                    <div>
                        <p>Got an account?</p>
                        <Link to="/login" className="btn-clearing alt-btn">Login!</Link>
                        <button class=" btn-clearing main-btn" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }