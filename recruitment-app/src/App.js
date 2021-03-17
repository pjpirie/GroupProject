import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/landing';
import Contact from './pages/Contact/contact';
import Company from './pages/Company/Company';
import Modules from './pages/Modules/Modules';

function App() {
  return (
    <Router>
      <div className="App">
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
    </Router>
  );
}

export default App;