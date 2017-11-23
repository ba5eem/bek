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
import App from './containers/App';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';



const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );

const responseGoogle = (response) => {
  let name = response.profileObj.name;
    localStorage.setItem('user',name);
    console.log(response.profileObj);
}




ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div> 
      <GoogleLogin
            clientId="366752664535-921iec03nsrtpbb4s8fdlpq8om608e12.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}/>
      <Route exact path="/" component={App}/>

      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
