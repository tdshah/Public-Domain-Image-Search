//import react and material-ui
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import all components
import './App.css';
import Navbar from './components/Navbar.js';
import Search from './components/Search.js';
import Body from './components/Body.js';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
              <Navbar/>
              <Search/>
          </div>
        </MuiThemeProvider>
      
    );
  }
}

export default App;
