import React, { Component } from 'react';
import '../css/App.css';
import '../config';
import Button from 'react-bootstrap/lib/Button'
import NavBar from './nav';

import Carousel from './carousel.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
      </div>
    );
  }
}

export default App;


