import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import SocialMedia from './components/socialMedia';
import Press from './components/press';
import About from './components/about';
import Events from './components/events';
import Art from './components/art';

ReactDOM.render(
                <Router>
                    <Route exact path="/" component={App}>
                    </Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
