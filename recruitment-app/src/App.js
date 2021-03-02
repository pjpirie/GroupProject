import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Register></Register>
      <Login></Login>
    </div>
  );
}

export default App;
