/*REACT*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
/*REDUX*/
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { GoogleLogin } from 'react-google-login';
/*CSS*/
import './index.css';
/*CONTAINERS*/
import AppHeader from './components/AppHeader.js';
import App from './containers/App';
import Login from './containers/Login';
import Background from './containers/Background';
import NewShift from './containers/NewShift';
import Shifts from './containers/Shifts';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );




ReactDOM.render(
  <Provider store={store}>
    <Router>
    <div>
      <NewShift />
      <Shifts />
    </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
