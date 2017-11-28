import { LOAD_USERS,ADD_USER } from '../actions/users.js';


const users = (state = [], action) => {

  switch(action.type){
    case LOAD_USERS:
    console.log('reducers triggered', action.users)
      return action.users;

    case ADD_USER:
      let user = action.user;
      localStorage.setItem('group', user.businessGroup)
      localStorage.setItem('email', user.email);
      localStorage.setItem('id', user.id);
      if(user.isLoggedIn === true){
        localStorage.setItem('isLoggedIn', true);
        console.log(localStorage.isLoggedIn, ' --- within reducer')
      }
      console.log(user.admin);
      if(user.admin === true){
        localStorage.setItem('admin',true)
        console.log(localStorage.admin);
      }
      localStorage.setItem('image', user.image);
      return user;

    default:
      return state
  }
}

export default users;