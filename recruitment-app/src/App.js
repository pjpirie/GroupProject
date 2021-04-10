import MenuIcon from '@material-ui/icons/Menu';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
// import HashLoader from 'react-spinners/HashLoader';
import { setAccount, setLogged, setRedirect, setSideNavOpen } from './actions';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Login from './components/Login/Login';
import ModuleNav from './components/ModuleHeader/ModuleNav';
import Register from './components/Register/Register';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Company from './pages/Company/Company';
import Contact from './pages/Contact/contact';
import Edit from './pages/Edit/Edit';
import Help from './pages/Help/Help';
import Landing from './pages/Landing/landing';
import CMS from './pages/CMS/CMS';
import Privacy from './pages/Privacy/Privacy';
import FAQ from './pages/FAQ/FAQ';
import { default as Module1 } from './pages/Modules/1/Module';
import { default as Module2 } from './pages/Modules/2/Module';
import { default as Module3 } from './pages/Modules/3/Module';
import { default as Module4 } from './pages/Modules/4/Module';
import { default as Module5 } from './pages/Modules/5/Module';
import { default as Module6 } from './pages/Modules/6/Module';
import { default as Module7 } from './pages/Modules/7/Module';
import Modules from './pages/Modules/Module';
import ModuleTree from './pages/ModuleTree/ModuleTree';



function App() {

  const [loading, setLoading] = useState(true);
  const [hasRedirected, setRedirected] = useState(false);
  
  const dispatch = useDispatch();
  
  const isLogged = useSelector(state => state.isLogged);
  const isSideNavOpen = useSelector(state => state.isSideNavOpen);
  const isRedirect = useSelector(state => state.toRedirect)
  
  const checkAuth = async (msg = "App") => {
    console.log("Checking Auth from " + msg)
    return await fetch('/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    // .then(data => console.log(data.user))
    .then(data => {
      (data.tokenValid) === true ? dispatch(setLogged(true)) : dispatch(setLogged(false));
      dispatch(setAccount(true, data.user));
    });
  }
  
  useEffect(() => {
    checkAuth();
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    }, 3000);
  }, [])
  
  if(loading){
    return (
    <div className="hashLoader__container">
      {/* <HashLoader color={'#ffffff'} className="hashLoader"/> */}
    </div>
    );
  }else{
    return (
      <Router>
        {console.log(isRedirect)}
        { isRedirect.redirect ? (
          <Redirect to={isRedirect.location}/>
        ) : (
          console.log("No Redirect")) 
        }
        {hasRedirected ? dispatch(setRedirect(false)) : ""}
        <ScrollToTop checkAuth={checkAuth} loading={setLoading}/>
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
                  <Route path="/privacy" component={Privacy} />
                  <Route component={Landing} />
                </Switch>
              </Fragment>
            ) : (
              <Fragment>
                <div className="LoggedIn__Module__Container">
  
                  <ModuleNav checkAuth={checkAuth}/>
                  <div className={(!isSideNavOpen ? "App__MenuOpen__button" : "App__MenuOpen__button hidden")}>
                      <MenuIcon onClick={() => dispatch(setSideNavOpen(!isSideNavOpen))} />
                  </div>
                  <Switch>
                    <Route path="/" exact component={ModuleTree} />
                    <Route path="/edit">
                      <Edit checkAuth={checkAuth} />
                    </Route>
                    <Route path="/help" component={Help} />
                    <Route path="/module/1" component={Module1} />
                    <Route path="/module/2" component={Module2} />
                    <Route path="/module/3" component={Module3} />
                    <Route path="/module/4" component={Module4} />
                    <Route path="/module/5" component={Module5} />
                    <Route path="/module/6" component={Module6} />
                    <Route path="/module/7" component={Module7} />
                    <Route path="/CMS" component={CMS} />
                    <Route path="/FAQ" component={FAQ} />
                    <Route path="/contact" component={Contact} />
                    <Route component={ModuleTree} />
                  </Switch>
                  <div className={(!isSideNavOpen ? "App__MenuOpen__button" : "App__MenuOpen__button hidden")}>
                      <MenuIcon style={{opacity: 0}} />
                  </div>
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
  
}

export default App;