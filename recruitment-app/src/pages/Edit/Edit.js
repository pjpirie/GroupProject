import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Edit.css';
import './Edit.responsive.css';




function Edit(props) {
    useEffect(() => {
        props.checkAuth();
    },[])
    
    const UserData = useSelector(state => state.getAccount).user;

    
    let PasswordsMatch = false;
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const handleSubmit = async e => {
        checkMatch(document.getElementById("confirmPass").value);
        e.preventDefault();
        setFirstName(document.getElementById("FirstNameID").value)
        setLastName(document.getElementById("LastNameID").value)
        console.log('Form Works')
        console.table({
                    firstName: FirstName,
                    lastName : LastName,
                    C_email: UserData.email,
                    N_email: Email,
                    Password: Password,
                })
        try {
            if (!PasswordsMatch) throw ("PasswordError: Passwords Don't Match");
            console.log("Submitted");
            const User = await changeUserInfo({
                firstName: FirstName,
                lastName : LastName,
                C_email: UserData.email,
                N_email: Email,
                Password: Password,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async function changeUserInfo(inData) {
        return await fetch(`/user/edit`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(inData), 
            credentials: 'same-origin'
        })
        .then(data => console.log(data))
        .then(() => props.checkAuth());
    }

    const checkMatch = p => {
        p === Password ? PasswordsMatch = true : PasswordsMatch = false;
        console.table([p, Password, PasswordsMatch]);
    }

    return (
        <div className='Edit__Page__Container' >
            <div className='Edit__Page__Form' >
                <h1>{UserData.firstName} {UserData.lastName}</h1>
                <form onSubmit={handleSubmit} className="editForm">
                    <div className="names">
                        <label>
                            <p>First Name</p>
                            <input id="FirstNameID" type="text" onChange={e => setFirstName(e.target.value)} defaultValue={UserData.firstName} />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input id="LastNameID" type="text" onChange={e => setLastName(e.target.value)} defaultValue={UserData.lastName} />
                        </label>
                    </div>
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)} defaultValue={UserData.email} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input id="Pass" type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <label>
                        <p>Confirm Password</p>
                        <input id="confirmPass" type="password" onChange={e => checkMatch(e.target.value)} />
                    </label>
                    <div>
                        <button class=" btn-clearing main-btn" type="submit">Request Change</button>
                    </div>
                    <div>
                        <button 
                        class="btn-clearing alt-btn" 
                        onClick={() => {alert("TODO")}}
                                >Delete Account</button>

                        <button 
                        class="btn-clearing alt-btn" 
                        onClick={() => {alert("TODO")}}
                                >Request Data</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;