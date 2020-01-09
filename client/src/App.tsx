import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Layout/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';

const App: React.FC = () => {
  

  const cenas  = (
    <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
    );

    return (
      <Router>
        <div className="App">
        <NavBar/>
          {cenas}
      </div>
      </Router>
      
    );
}


export default App;
