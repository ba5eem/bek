import { LOGIN_USER } from '../actions/login.js';


const login = (state = {}, action) => {

  switch(action.type){
    case LOGIN_USER:
      return action.user;
    default:
      return state
  }
}

export default login;