import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';

export function Users ({users, loading, changeAccess, textLength}) {
    if(loading){
        return <h2>Loading...</h2>
    }

    

    return (
        <ul className="userList">
            <li key={0} className="userList__item">
                    <p className="userList__item__name heading">Account Name</p>
                    {textLength > 5 &&
                    <p className="userList__item__email heading">Account Email</p>
                    }
                    <p className="userList__item__paidAccess heading">Content Access</p>
                    {textLength > 10 &&
                    <p className="userList__item__dob heading">Account D.O.B</p>
                    }
                    <p className="userList__item__auth heading">Admin Status</p>
                    <p className="userList__item__auth heading">Toggle Content Access</p>
                </li>
            {users.map(user => (
                <li key={user.id} className="userList__item">
                    <p className="userList__item__name">{textLength > 10 ? user.firstName : user.firstName.substring(0,1) + "."} {user.lastName}</p>
                    {textLength > 5 &&
                    <p className="userList__item__email">{user.email.length > textLength+5 ? user.email.substring(0,textLength+5) + "..." : user.email}</p>
                    }
                    <p className="userList__item__paidAccess">{user.paidAccess ? <DoneIcon style={{'fill':'#2a9d8f'}} />:<CloseIcon style={{'fill':'#c75e5e'}} />}</p>
                    {textLength > 10 &&
                    <p className="userList__item__dob">{user.dob}</p>
                    }
                    <p className="userList__item__auth">{user.auth ? <DoneIcon style={{'fill':'#2a9d8f'}} />:<CloseIcon style={{'fill':'#c75e5e'}} />}</p>
                    <button className="userList__item__button" onClick={() => {changeAccess({email: user.email, paidAccess: !user.paidAccess})}}>Change Access</button>
                </li>
            ))}
        </ul>
    )
}