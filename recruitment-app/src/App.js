import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './App.css';
import Navbar from './components/Header/Navbar.js';
import Footer from './components/Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
      <Login />
      <Footer />

    </div>
  );
}

export default App;
