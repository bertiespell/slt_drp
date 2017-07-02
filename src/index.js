import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import Press from './components/press';
import About from './components/about';
import Events from './components/events';
import Art from './components/art';
import reducer from './reducers/index.reducer';
import Home from './components/home';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
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
  </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
