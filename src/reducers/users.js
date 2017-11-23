import { LOAD_USERS,EDIT_USER } from '../actions/users.js';


const users = (state = {}, action) => {

  switch(action.type){
    case LOAD_USERS:
      return action.users;

    case EDIT_USER:
      return action.user;

    default:
      return state
  }
}

export default users;