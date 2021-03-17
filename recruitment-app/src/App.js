import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navbar from './components/Header/Navbar.js';
import Footer from './components/Footer/Footer.js';
<<<<<<< HEAD
import Landing from './pages/Landing/landing';
import Contact from './pages/Contact/contact';
=======
import Landing from './pages/landing';
import Contact from './pages/contact';
import Company from './pages/company';
import Modules from './pages/modules';
>>>>>>> origin/ChrisDev


function App() {
  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />

      </div>
=======
        <div className="main">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/company" component={Company} />
            <Route path="/modules" component={Modules} />
          </Switch>
        </div>
      </div>
      <Footer />
>>>>>>> origin/ChrisDev
    </Router>
  );
}

export default App;