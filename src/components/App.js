import React, { Component } from 'react';
import '../css/App.css';
import '../config';
import NavBar from './nav';

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


