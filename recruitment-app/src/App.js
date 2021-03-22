import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/landing';
import Contact from './pages/Contact/contact';
import Company from './pages/Company/Company';
import Modules from './pages/Modules/Modules';
import Account from './pages/Account/Account';
import { useDispatch } from 'react-redux';
import {setLogged} from './actions';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';



function App() {

  const dispatch = useDispatch();
  
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
    .then(data => data.tokenValid ? dispatch(setLogged(data.tokenValid)) : '');
  }
  
  useEffect(() => {
    checkAuth();
  }, [])
  
  
  return (
    <Router>
      <ScrollToTop checkAuth={checkAuth} />
      <div className="App">
        <div className="main">
          <Navbar checkAuth={checkAuth}/>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/company" component={Company} />
            <Route path="/modules" component={Modules} />
            <Route path="/account" component={Account} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;