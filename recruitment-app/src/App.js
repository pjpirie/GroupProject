import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Navbar from './components/Header/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Landing from './pages/landing';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
