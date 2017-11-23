import { combineReducers } from 'redux';

import login from './login';
import logout from './logout';
import users from './users';

export default combineReducers({
  login,
  logout,
  users
});