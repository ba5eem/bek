import { combineReducers } from 'redux';

import login from './login';
import logout from './logout';
import users from './users';
import shifts from './shifts';

export default combineReducers({
  login,
  logout,
  users,
  shifts
});