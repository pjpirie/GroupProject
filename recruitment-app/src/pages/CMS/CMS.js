import { useSelector } from 'react-redux'

import React, { useEffect, useState }  from 'react'
import { Redirect } from 'react-router';
import axios from 'axios'
import { Button } from '@material-ui/core';

import './CMS.css'

function CMS(props) {

    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get("http://86.11.53.197:5000/user")
        .then(res=>{
            console.log(res)
            setUsers(res.data)
        })
        .catch(error=>console.log(error))
    }, [])

    const changeAccess=(currentAccess)=>{
        window.location.reload();

        axios.get("http://86.11.53.197:5000/user")
        .then(res=>{
            console.log(res)
            setUsers(res.data)
        })
        .catch(error=>console.log(error))

        return fetch('http://86.11.53.197:5000/CMS', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(currentAccess),
        })
        .then(data=>data.json())
    }


    const checker = useSelector(state => state.getAccount).user.auth
    if(!checker) return <Redirect to='/'/>

    return (
        <div className="CMS-container">
            <div className="acc-display">
                <h1>How to use:</h1>
                <h3>To change someones paid status, simply find the account you wish to change and click on the "Change Access" button.</h3>
                <h3>If you change the access to the wrong account, find the account and press the button again.</h3> <br />
                <table className="email-display">
                    <tr className="email-header">
                        <th>Email</th>
                        <th>Paid</th>
                        <th>Change</th>
                    </tr>
                    {
                        users.map(user=>{
                            return(
                            <tr className="email-single-display">
                                <td className="user-email"><p name="userEmail">{user.email}</p></td>
                                <td className="user-email"><p name="currentAccess">{user.paidAccess ? "Yes":"No"}</p></td>
                                <td className="user-email"><Button className="button-style" onClick={()=>{changeAccess({email: user.email, paidAccess: !user.paidAccess})}}>Change Access</Button></td>
                            </tr>
                        )})
                    }
                </table>

            </div>

        </div>
    )  
}
export default CMS