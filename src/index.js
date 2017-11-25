/*REACT*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// /*REDUX*/--------------------------------------
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { GoogleLogin } from 'react-google-login';
// /*CSS*/-----------------------------------------
import './index.scss';
// /*CONTAINERS*/----------------------------------
import AppHeader from './components/AppHeader.js';
import App from './containers/App';
import Login from './containers/Login';
import Background from './containers/Background';

// ------STORE--------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div id="source">

        <App />

      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
