import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom';

import SocialMedia from './components/socialMedia';
import Press from './components/press';
import About from './components/about';
import Events from './components/events';
import Art from './components/art';
import Home from './components/home';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path="/press" component={Press}/>
        <Route path="/art" component={Art}/>
        <Route path="/about" component={About}/>
        <Route path="/events" component={Events}/>
      </Switch>
    </App>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
