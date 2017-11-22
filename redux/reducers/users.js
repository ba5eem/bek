import { LOAD_USERS,EDIT_USER } from '../actions/auth.js';


const users = (state = [], action) => {

  switch(action.type){
    case LOAD_USERS:
    console.log('fired');
    console.log(action.users);
      return action.users;

    case EDIT_USER:
    console.log('Edit fired');
      return action.user;

    default:
    console.log('default fired');
      return ['baseem']
  }
}

export default users;