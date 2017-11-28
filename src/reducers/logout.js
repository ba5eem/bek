import { LOGOUT_USER } from '../actions/logout.js';


const logout = (state = {}, action) => {

  switch(action.type){
    case LOGOUT_USER:
      return action.user;
    default:
      return state
  }
}

export default logout;