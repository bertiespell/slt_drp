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

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import SocialMedia from './components/socialMedia';
import Press from './components/press';
import About from './components/about';
import Events from './components/events';
import Art from './components/art';
import reducer from './reducers/index.reducer';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
                <Router>
                    <Route exact path="/" component={App}>
                    </Route>
                </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
