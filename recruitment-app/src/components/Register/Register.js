import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import './Login.css';

async function RegisterUser(credentials) {
    return fetch('http://localhost:5000/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json());
}

export default function Register() {

    let PasswordsMatch = false;
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [DateOfBirth, setDateOfBirth] = useState();

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

    return (
        <div className="register-wrapper">
            <h1>Please Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>First Name</p>
                    <input type="text" onChange={e => setFirstName(e.target.value)} />
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" onChange={e => setLastName(e.target.value)} />
                </label>
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
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }