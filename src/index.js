/*REACT*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//REDUX--------------------------------------
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
// import { GoogleLogin } from 'react-google-login';
//SCSS-----------------------------------------
import './index.scss';
//CONTAINERS----------------------------------
import App from './containers/App';
import Login from './containers/Login';
import SideBar from './containers/SideBar';
import Nav from './components/nav.components';
import Footer from './components/footer.components';
import UsersListView from './containers/UsersListView';

// import AppHeader from './components/AppHeader.js';
// import Background from './containers/Background';

//STORE--------------------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div id="source">
        <div id="header">
          <SideBar />
          <div id="logo">
            <Link to="/">
            </Link>
          <div id="title">bek-connect</div>
          </div>
          <Nav />
        </div>

        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={UsersListView} />
      <Footer />
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();