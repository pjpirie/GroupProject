
import './ModuleNav.css';
import './ModuleNav.responsive.css';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import ModulesCompleted from '../ModulesCompleted/ModulesCompleted';
import SchoolIcon from '@material-ui/icons/School';
import CreateIcon from '@material-ui/icons/Create';
import HelpIcon from '@material-ui/icons/Help';
import { useSelector,useDispatch } from 'react-redux';
import {setLogged,setSideNavOpen} from '../../actions';

const GetUserName = () => {
    return <h3 className="ModuleNav__user" >Paul Pirie</h3>
}


async function logout() {
    return await fetch('/user/logout', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        }, 
        credentials: 'same-origin'
    })
    .then(data => console.log(data));
}

function ModuleNav() {
    
    const dispatch = useDispatch();
    const isSideNavOpen = useSelector(state => state.isSideNavOpen);
    return (
        <div className={(isSideNavOpen ? "ModuleNav" : "ModuleNav hidden")}>
            <div className="ModuleNav__container">
                <div className="ModuleNav__close">
                <CloseIcon onClick={() => dispatch(setSideNavOpen(!isSideNavOpen))} />
                </div>
                <GetUserName />
                <ModulesCompleted form="bar" theme="light"/>
                <Link to="/moduleTree">
                    <li className="ModuleNav__link"><SchoolIcon fontSize="large"/> <span>Module</span></li>
                </Link>
                <Link to="/edit">
                    <li className="ModuleNav__link"><CreateIcon fontSize="large" /> <span>Edit</span></li>
                </Link>
                <Link to="/help">
                    <li className="ModuleNav__link"><HelpIcon fontSize="large" /> <span>Help</span></li>
                </Link>
                <Link className="ModuleNav__link link_center" to="/">
                    <li onClick={() => {
                        logout();
                        dispatch(setLogged(false));
                    }} className="ModuleNav__btn">Logout</li>
                </Link>
            </div>
        </div>
    );
}

export default ModuleNav;