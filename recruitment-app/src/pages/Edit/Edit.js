import { useSelector } from 'react-redux';
import './Edit.css';
import './Edit.responsive.css';




function Edit() {
    
    
    const UserData = useSelector(state => state.getAccount).user;

    async function completeModule(inData, moduleNumber) {
        return await fetch(`/user/moduleComplete/${moduleNumber}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(inData), 
            credentials: 'same-origin'
        })
        .then(data => console.log(data));
    }

    return (
        
    );
}

export default Edit;