/*REACT*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';
//REDUX--------------------------------------
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { GoogleLogin } from 'react-google-login';
//SCSS-----------------------------------------
import './index.scss';
//CONTAINERS----------------------------------
import App from './containers/App';
import Login from './containers/Login';
import Home from './containers/Home';
import ChatApp from './containers/Chat/ChatApp';
import SideBar from './containers/SideBar';
import NotFound from './containers/NotFound';
import Footer from './components/footer.components';
import UsersListView from './containers/UsersListView';
import ProfileView from './containers/ProfileView';
import AcceptShift from './containers/AcceptShift/index.js';
import UserList from './components/UserList';
// import AppHeader from './components/AppHeader.js';
// import Background from './containers/Background';

//STORE--------------------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );
const auth = localStorage.isLoggedIn !== undefined ? localStorage.isLoggedIn : false;

const accepturi = localStorage.accepturi !== undefined ? localStorage.accepturi : '/accept';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div id="source">
        <div id="header">
          <SideBar />
          <div id="logo">
            {auth ?
            <span><Link to="/login">
          <div id="title" >bek-connect</div></Link></span>
          : <span><Link to="/login">
          <div id="title" >bek-connect</div></Link></span>
            }
          </div>
          <div id="header-bottom-border"></div>
        </div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={UsersListView} />
          <Route path="/home" component={Home} />
          <Route path="/chat" component={ChatApp} />
          <Route path="/accept" component={AcceptShift}/>
          <Route component={NotFound} />
        </Switch>
      <Footer />
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();