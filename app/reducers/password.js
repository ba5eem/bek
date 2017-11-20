import { EDIT_PASSWORD,RESET_PASSWORD } from '../actions/password.js';


const password = (state = {}, action) => {

  switch(action.type){
    case EDIT_PASSWORD:
      return action.user;
      
    case RESET_PASSWORD:
      return action.user;
    default:
      return state
  }
}

export default password;