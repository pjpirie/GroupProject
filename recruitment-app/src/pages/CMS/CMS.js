import React from 'react';
import './CMS.css';


function CMS(props) {

    // const changeAccess=(currentAccess)=>{
    //     let newAcc;
    //     if(currentAccess === true){newAcc=false}else{newAcc=true};
    //     return fetch('http://localhost:5000/CMS', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newAcc),
    //     })
    //         .then(data=>data.json())
    // }

    return (
        <div className="CMS-container">

            <div className="acc-display">

                <table className="email-display">
                    <tr className="email-header">
                        <th>Email</th>
                        <th>Paid</th>
                        <th>Change</th>
                    </tr>
                    {/* {
                        users.map(user=>
                            <tr className="email-single-display">
                                <td className="user-email" key={user.id}>{user.email}</td>
                                <td className="user-email"><p name="currentAccess" value={user.paidAccess ? "true":"false"}>{user.paidAccess ? "Yes":"No"}</p></td>
                                <td className="user-email"><form onSubmit={changeAccess(user.paidAccess)}><button type="submit" value="submit">Change Access</button></form></td>
                            </tr>
                        )
                    } */}
                </table>

            </div>

        </div>
    )  
}

export default CMS