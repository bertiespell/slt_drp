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
        App!
      </div>
    );
  }
}

export default App;