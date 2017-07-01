import React, { Component } from 'react';
import '../css/App.css';
import '../config';
import Button from 'react-bootstrap/lib/Button'
import NavBar from './nav';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}

export default App;