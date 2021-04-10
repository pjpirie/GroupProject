import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { setLightNav } from '../../actions';
import './Register.css';
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
        return fetch('http://86.11.53.197:5000/user/register', {
            method: 'POST',
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
        } catch (e) {
            console.error(e);
        }
    }

    const checkMatch = p => {
        p === Password ? PasswordsMatch = true : PasswordsMatch = false;
        console.table([p, Password, PasswordsMatch]);
    }
    if(redirect){
        return <Redirect to='/login'/>
    }

    return (
        
        <div className="registerPage__Wrapper">
            <div className="registerWrapper">
                <h1>Please Register</h1>
                <form onSubmit={handleSubmit} className="registerForm">
                    <div className="names">
                        <label>
                            <p>First Name</p>
                            <input type="text" onChange={e => setFirstName(e.target.value)} />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input type="text" onChange={e => setLastName(e.target.value)} />
                        </label>
                    </div>
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input id="Pass" type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <label>
                        <p>Confirm Password</p>
                        <input id="confirmPass" type="password" onChange={e => checkMatch(e.target.value)} />
                    </label>
                    <label>
                        <p>Date of Birth</p>
                        <input type="date" onChange={e => setDateOfBirth(e.target.value)} />
                    </label>
                    <div>
                        <p>Got an account?
                        <button 
                        class="btn-clearing alt-btn" 
                        onClick={() => {return <Redirect to='/login'/>}}
                                >Log in here</button></p>
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