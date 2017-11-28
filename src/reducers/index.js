import { combineReducers } from 'redux';

//import login from './login';
import logout from './logout';
import users from './users';//login is been done in the users reducer
import shifts from './shifts';

export default combineReducers({
  logout,
  users,
  shifts
});