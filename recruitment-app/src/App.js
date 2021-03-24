import { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navbar from './components/Header/Navbar';
import ModuleNav from './components/ModuleHeader/ModuleNav';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/landing';
import Contact from './pages/Contact/contact';
import Company from './pages/Company/Company';
import Modules from './pages/Modules/Modules';
import Account from './pages/Account/Account';
import Help from './pages/Help/Help'
import { useDispatch, useSelector } from 'react-redux';
import {setLogged, setSideNavOpen} from './actions';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import MenuIcon from '@material-ui/icons/Menu';
import ModuleTree from './pages/ModuleTree/ModuleTree'



function App() {

  const dispatch = useDispatch();
  
  const isLogged = useSelector(state => state.isLogged);
  const isSideNavOpen = useSelector(state => state.isSideNavOpen);
  
  const checkAuth = async (msg = "App") => {
    console.log("Checking Auth from " + msg)
    return await fetch('/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    // .then(data => console.log(data))
    .then(data => (data.tokenValid) === true ? dispatch(setLogged(true)) : dispatch(setLogged(false)));
  }
  
  useEffect(() => {
    checkAuth();
  }, [])
  
  
  return (
    <Router>
      <ScrollToTop checkAuth={checkAuth} />
      <div className="App">
        <div className="main">
          {!isLogged ?  (
            <Fragment>
              <Navbar checkAuth={checkAuth} />
              <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/contact" component={Contact} />
                <Route path="/company" component={Company} />
                <Route path="/modules" component={Modules} />
              </Switch>
            </Fragment>
          ) : (
            <Fragment>
              <div className="LoggedIn__Module__Container">

                <ModuleNav/>
                <div className={(!isSideNavOpen ? "App__MenuOpen__button" : "App__MenuOpen__button hidden")}>
                    <MenuIcon onClick={() => dispatch(setSideNavOpen(!isSideNavOpen))} />
                </div>
                <Switch>
                  <Route path="/moduletree" component={ModuleTree} />
                  <Route path="/account" component={Account} />
                  <Route path="/help" component={Help} />
                </Switch>
              </div>
            </Fragment>
          )}
         
            <span className="footer__divider"></span>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;