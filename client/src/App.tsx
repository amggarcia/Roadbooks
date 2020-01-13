import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Layout/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RoadBookManager from './RoadBookManager/RoadBookManager';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';

const App: React.FC = () => {

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const cenas = (
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
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <NavBar />
          <div style={{ paddingTop: 64 }}>
            <Route exact path="/" render={() => <div>{cenas}</div>}></Route>
            <Route path="/RoadBookManager" render={() => <RoadBookManager />}></Route>
          </div>
        </ThemeProvider>
      </div>
    </Router>

  );
}

export default App;
