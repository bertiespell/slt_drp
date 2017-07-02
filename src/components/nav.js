import React, { Component } from 'react';
import App from './App';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import SocialMedia from './socialMedia';
import Press from './press';
import About from './about';
import Events from './events';
import Art from './art';
import Home from './home';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import brandImage from './images/smallbluelogo.jpg';

class NavBar extends Component {
    render() {
        return (
          // <Router>
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Toggle />
                <div className="sd-logo">
                  <img src={brandImage}></img>
                </div>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem><Link to="/">Home</Link></NavItem>
                  <NavItem><Link to="/events">Events</Link></NavItem>
                </Nav>
                <Nav pullRight>
                  <NavItem><Link to="/press">Press</Link></NavItem>
                  <NavItem><Link to="/art">Art</Link></NavItem>
                </Nav>
              </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default NavBar;


// </Router>

  // <div>
  //     <Router>
  //       <header className="header">
  //         <div className="header-container">
  //           <nav className="header-nav">
  //             <ul>
  //               <li><Link to="/">Home</Link></li>
  //               <li><Link to="/socialMedia">Social Media</Link></li>
  //               <li><Link to="/press">Press</Link></li>
  //               <li className="left-float"><Link to="/art">Art</Link></li>
  //               <li className="left-float"><Link to="/about">About</Link></li>
  //               <li className="left-float"><Link to="/events">Events</Link></li>
  //             </ul>
  //           </nav>
  //// <Route path="/press" component={Press}/>
  // <Route path="/art" component={Art}/>
  // <Route path="/about" component={About}/>
  // <Route path="/events" component={Events}/>
  //
  //         </div>
  //       </header>
  //     </Router>
  // </div>
