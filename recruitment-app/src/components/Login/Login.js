import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import './Login.css';

async function LoginUser(credentials) {
    return fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json());
}

async function accountExists(email) {
    const emailJSONObject = { Email: email };
    // console.log("Email: " + email);
    return fetch('http://localhost:5000/user/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailJSONObject)
    })
        .then(data => data.json());
}

export default function Login() {

    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(await accountExists(Email));
        try {
            if (await !accountExists(Email)) throw ("LoginError: No account with that email address");
            console.log("Submitted");
            // const token = await LoginUser({
            //     Email,
            //     Password
            // });
            console.log(await LoginUser({
                Email,
                Password
            }));
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="login-wrapper">
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input id="Pass" type="password" onChange={e => setPassword(e.target.value)} />
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