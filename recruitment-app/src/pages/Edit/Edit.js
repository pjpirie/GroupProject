import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert, setRedirect } from '../../actions';
import './Edit.css';
import './Edit.responsive.css';




function Edit(props) {
    useEffect(() => {
        props.checkAuth();
    },[])
    const dispatch = useDispatch();
    const UserData = useSelector(state => state.getAccount).user;

    
    let PasswordsMatch = false;
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        
        if(props.Formtype === "info"){
            // checkMatch(document.getElementById("confirmPass").value);
            setFirstName(document.getElementById("FirstNameID").value)
            setLastName(document.getElementById("LastNameID").value)
            console.log('Info Form Works')
            console.table({
                        firstName: FirstName,
                        lastName : LastName,
                        C_email: UserData.email,
                        N_email: Email,
                        Password: Password,
                    })
            try {
                // if (!PasswordsMatch) throw ("PasswordError: Passwords Don't Match");
                console.log("Submitted");
                const User = await changeUserInfo({
                    firstName: FirstName,
                    lastName : LastName,
                    C_email: UserData.email,
                    N_email: Email,
                    Password: Password,
                });
                console.log(`[User Log] ${User}`)
                if(User.pass === undefined || User.pass === null){
                    dispatch(setAlert(true, {AlertTitle: 'Edit Error', AlertMessage: User.error}));
                }
            } catch (e) {
                console.error(e);
            }
        }else{
            checkMatch(document.getElementById("confirmNewPass").value);
            console.log('Password Form Works')
            console.table({
                        C_email: UserData.email,
                        N_email: Email,
                        Password: Password,
                    })
            try {
                if (!PasswordsMatch) throw ("PasswordError: Passwords Don't Match");
                console.log("Submitted");
                const User = await changeUserPassword({
                    email: UserData.email,
                    Password: Password,
                    N_Password: newPassword,
                });
                console.log(User);
                if(User.error !== undefined){
                    dispatch(setAlert(true, {AlertTitle: 'Edit Error', AlertMessage: User.error}));
                }else{
                    dispatch(setAlert(true, {AlertTitle: 'Edit', AlertMessage: "Password Changed"}));
                }
            } catch (e) {
                console.error(e);
            }
        }

        
    }

    async function changeUserInfo(inData) {
        return await fetch(`https://group-54-rct.herokuapp.com/user/edit`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(inData)
        })
        
        .then(data => data.json())
        .then(data => {
            console.log(data);
            if(data.error === undefined || data.error === null){
                if(data.newEmail !== undefined){
                    window.localStorage.setItem('User_Id', data.newEmail)
                }
            }
            props.checkAuth();
            return data;
        });
    }

    async function changeUserPassword(inData) {
        return await fetch(`https://group-54-rct.herokuapp.com/user/edit/password`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(inData)
        })
        // .then(data => console.log(data))
        .then(data => {
            props.checkAuth();
            return data.json();
        });
    }

    const checkMatch = p => {
        if(props.Formtype === "info"){
            p === Password ? PasswordsMatch = true : PasswordsMatch = false;
            // console.table([p, Password, PasswordsMatch]);
        }else{
            p === newPassword ? PasswordsMatch = true : PasswordsMatch = false;
            // console.table([p, newPassword, PasswordsMatch]);
        }
        if(PasswordsMatch == false){
            dispatch(setAlert(true, {AlertTitle: 'Edit Error', AlertMessage: "Passwords Don't Match"}));
        }
    }

    return (
        <div className='Edit__Page__Container' >
            <div className='Edit__Page__Form' >
                <h1 className="sans-heading">{UserData.firstName} {UserData.lastName}</h1>
                {props.Formtype === "info" ? (
                    <form onSubmit={handleSubmit} className="editForm">
                    <p>Use this form to edit your name and email on our records, use the password change form to change your password.</p>
                    <div className="names">
                        <label>
                            <p>First Name</p>
                            <input id="FirstNameID" type="text" onChange={e => setFirstName(e.target.value)} defaultValue={UserData.firstName} required />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input id="LastNameID" type="text" onChange={e => setLastName(e.target.value)} defaultValue={UserData.lastName} required />
                        </label>
                    </div>
                        <label>
                            <p>Email</p>
                            <input type="email" onChange={e => setEmail(e.target.value)} defaultValue={UserData.email} required />
                        </label>
                        <label>
                            <p>Password</p>
                            <input id="Pass" type="password" onChange={e => setPassword(e.target.value)} required />
                        </label>
                        {/* <label>
                            <p>Confirm Password</p>
                            <input id="confirmPass" type="password" onChange={e => checkMatch(e.target.value)} />
                        </label> */}
                        <div>
                            <button class=" btn-clearing main-btn" type="submit">Save Changes</button>
                        </div>
                        <div>
                            <button 
                            class="btn-clearing alt-btn" 
                            onClick={(e) => { e.preventDefault(); alert("TODO")}}
                                    >Delete Account</button>

                            <button 
                            class="btn-clearing alt-btn" 
                            onClick={(e) => { e.preventDefault(); alert("TODO")}}
                                    >Request Data</button>

                            <button 
                            class="btn-clearing alt-btn" 
                            onClick={(e) => { e.preventDefault(); dispatch(setRedirect(true, `/edit/password`))} }
                                    >Change Password</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit} className="editForm">
                        <p>Use this form to edit your account password, use the information change form to change your name and email on our records.</p>
                        <label>
                            <p>Current Password</p>
                            <input id="Pass" type="password" onChange={e => setPassword(e.target.value)} required />
                        </label>
                        <label>
                            <p>New Password</p>
                            <input id="newPass" type="password" onChange={e => setNewPassword(e.target.value)} required />
                        </label>
                        <label>
                            <p>Confirm New Password</p>
                            <input id="confirmNewPass" type="password" required />
                        </label>
                        <div>
                            <button class=" btn-clearing main-btn" type="submit">Save Changes</button>
                        </div>
                        <div>
                            <button 
                            class="btn-clearing alt-btn" 
                            onClick={(e) => { e.preventDefault(); alert("TODO")}}
                                    >Delete Account</button>

                            <button 
                            class="btn-clearing alt-btn" 
                            onClick={(e) => { e.preventDefault(); alert("TODO")}}
                                    >Request Data</button>

                            <button 
                            class="btn-clearing alt-btn" 
                            onClick={(e) => { e.preventDefault(); dispatch(setRedirect(true, `/edit`))} }
                                    >Change Info</button>
                        </div>
                    </form>
                )}
                
            </div>
        </div>
    );
}

export default Edit;