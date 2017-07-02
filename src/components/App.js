import React, { Component } from 'react';
import '../css/App.css';
import '../config';
import Button from 'react-bootstrap/lib/Button'
import NavBar from './nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Press from './press';
import About from './about';
import Events from './events';
import Art from './art';
import Carousel from './carousel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
