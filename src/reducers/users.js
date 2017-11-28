import { LOAD_USERS,ADD_USER, GETONE_USER } from '../actions/users.js';


const users = (state = [], action) => {

  switch(action.type){
    case LOAD_USERS:

      return action.users;

    case ADD_USER:
      return action.user;

    case GETONE_USER:
    console.log('reducers triggered', action.user)
      return action.user;

    default:
      return state
  }
}

export default users;