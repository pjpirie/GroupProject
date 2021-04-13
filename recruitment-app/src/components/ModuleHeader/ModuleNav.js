
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HelpIcon from '@material-ui/icons/Help';
import SchoolIcon from '@material-ui/icons/School';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogged, setSideNavOpen } from '../../actions';
import ModulesCompleted from '../ModulesCompleted/ModulesCompleted';
import './ModuleNav.css';
import './ModuleNav.responsive.css';




async function logout() {
    // return await fetch('/user/logout', {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json'
    //     }, 
    //     credentials: 'same-origin'
    // })
    // .then(data => console.log(data));
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('User_Id');
    window.localStorage.removeItem('logged_in');
}

function ModuleNav(props) {
    
    useEffect(() => {
        props.checkAuth();
    },[]);

    const dispatch = useDispatch();
    const isSideNavOpen = useSelector(state => state.isSideNavOpen);
    const UserData = useSelector(state => state.getAccount).user;
    // console.log(UserData);

    const GetUserName = () => {
        if((UserData == undefined || UserData == null)) {
            return <h3 className="ModuleNav__user" >Data Error</h3>
        }else{
            return <h3 className="ModuleNav__user sans-heading" >{UserData.firstName} {UserData.lastName}</h3>
        }
    }
    return (
        <div className={(isSideNavOpen ? "ModuleNav" : "ModuleNav hidden")}>
            <div className="ModuleNav__container">
                <div className="ModuleNav__close">
                <CloseIcon onClick={() => dispatch(setSideNavOpen(!isSideNavOpen))} />
                </div>
                <GetUserName />
                <ModulesCompleted form="bar" theme="light"/>
                <Link to="/">
                    <li className="ModuleNav__link"><SchoolIcon fontSize="large"/> <span>Module</span></li>
                </Link>
                <Link to="/edit">
                    <li className="ModuleNav__link"><CreateIcon fontSize="large" /> <span>Edit</span></li>
                </Link>
                <Link to="/help">
                    <li className="ModuleNav__link"><HelpIcon fontSize="large" /> <span>Help</span></li>
                </Link>
                {(UserData == undefined || UserData == null) ? (
                    ''
                ) : (
                    UserData.auth ?  (
                    <Link to="/CMS">
                        <li className="ModuleNav__link"><DashboardIcon fontSize="large" /> <span>CMS</span></li>
                    </Link>
                    ):(
                        ''
                    //     <li onClick={() => {
                    //     dispatch(setAlert(true, {AlertTitle: 'Hello, World!', AlertMessage: 'Hola, Niños!'}));
                    // }} className="ModuleNav__link">Alert Test</li>
                    )
                ) }
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