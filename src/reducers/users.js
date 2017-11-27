import { LOAD_USERS,ADD_USER } from '../actions/users.js';


const users = (state = [], action) => {

  switch(action.type){
    case LOAD_USERS:
    console.log('reducers triggered', action.users)
      return action.users;

    case ADD_USER:
      return action.user;

    default:
      return state
  }
}

export default users;