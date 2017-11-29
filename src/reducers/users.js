import { LOAD_USERS,ADD_USER, EDIT_PHONE } from '../actions/users.js';


const users = (state = [], action) => {

  switch(action.type){
    case LOAD_USERS:

      return action.users;

    case ADD_USER:
      return action.user;

    case EDIT_PHONE:
      return action.user;

    default:
      return state
  }
}

export default users;