import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
// import MenuItem from 'react-bootstrap/lib/MenuItem';
// import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import brandImage from './images/logo.png';

class NavBar extends Component {
    render() {
        return (
          // <Router>
            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Toggle />
                <div className="sd-logo">
                  <img src={brandImage} alt="Slut Drop Logo"></img>
                </div>
              </Navbar.Header>
              <Navbar.Collapse>
                <div>
                  <Nav>
                    <NavItem><Link to="/">&hearts;Home&hearts;</Link></NavItem>
                    <NavItem className="more-right"><Link to="/events">&hearts;Events&hearts;</Link></NavItem>
                  </Nav>
                  <Nav pullRight>
                    <NavItem className="more-right"><Link to="/press">&hearts;Press&hearts;</Link></NavItem>
                    <NavItem><Link to="/contact">&hearts;Contact&hearts;</Link></NavItem>
                  </Nav>
                </div>
              </Navbar.Collapse>
              <hr className="divider"/>
              <hr className="divider2"/>

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
