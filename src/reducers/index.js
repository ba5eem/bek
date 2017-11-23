import { combineReducers } from 'redux';

import login from './login';
import logout from './logout';
import password from './password';
import register from './register';
import roles from './roles';
import shifts from './shifts';
import users from './users';

export default combineReducers({
  login,
  logout,
  password,
  register,
  roles,
  shifts,
  users
});