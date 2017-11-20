import { ADD_USER } from '../actions/register.js';


const register = (state = {}, action) => {

  switch(action.type){
    case ADD_USER:
      return action.user;
    default:
      return state
  }
}

export default register;