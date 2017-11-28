import { LOGOUT_USER } from '../actions/logout.js';


const logout = (state = {}, action) => {

  switch(action.type){
    case LOGOUT_USER:
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('admin')
      localStorage.setItem('isLoggedIn', false);
      localStorage.setItem('admin', false);
      return null;
    default:
      return state
  }
}

export default logout;