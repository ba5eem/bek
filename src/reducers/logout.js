import { LOGOUT_USER } from '../actions/logout.js';


const logout = (state = {}, action) => {

  switch(action.type){
    case LOGOUT_USER:
      localStorage.clear();
      localStorage.setItem('isLoggedOut',action.status.isLoggedOut)
      return action.status;
    default:
      return state
  }
}

export default logout;