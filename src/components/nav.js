import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './App';
import SocialMedia from './socialMedia';
import Press from './press';
import About from './about';
import Events from './events';
import Art from './art';

class NavBar extends Component {
    render() {
        return (
            <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/socialMedia">Social Media</Link></li>
                        <li><Link to="/press">Press</Link></li>
                        <li><Link to="/art">Art</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/events">Events</Link></li>
                    </ul>
            </div>
        )
    }
}

export default NavBar;