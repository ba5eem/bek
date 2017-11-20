import { LOAD_ROLES,ADD_ROLE } from '../actions/roles.js';


const roles = (state = {}, action) => {

  switch(action.type){
    case LOAD_ROLES:
      return action.roles;

    case ADD_ROLE:
      return action.role;
    default:
      return state
  }
}

export default roles;