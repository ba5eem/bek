import { LOAD_USERS,ADD_USER } from '../actions/users.js';


const users = (state = [], action) => {

  switch(action.type){
    case LOAD_USERS:
    console.log('reducers triggered', action.users)
      return action.users;

    case ADD_USER:
      let user = action.user;
      localStorage.setItem('admin',user.admin)
      localStorage.setItem('group', user.businessGroup)
      localStorage.setItem('email', user.email);
      localStorage.setItem('id', user.id);
      localStorage.setItem('isLoggedIn', user.isLoggedIn);

      return user;

    default:
      return state
  }
}

export default users;