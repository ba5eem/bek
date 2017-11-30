import { LOAD_USERS,ADD_USER, EDIT_PHONE } from '../actions/users.js';


const users = (state = [], action) => {

 switch(action.type){
   case LOAD_USERS:
     return action.users;

    case ADD_USER:
      let user = action.user;
      localStorage.setItem('group', user.businessGroup)
      localStorage.setItem('email', user.email);
      localStorage.setItem('id', user.id);
      console.log(user)
      console.log(user.name);
      localStorage.setItem('username', user.name);
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

   case EDIT_PHONE:
     let index = state.findIndex((user) => {
       return user.id === action.user.id
     });
     console.log([ ...(state.slice(0, index)), action.user, ...(state.slice((index + 1), state.length))])
     return [ ...(state.slice(0, index)), action.user, ...(state.slice((index + 1), state.length))];

   default:
     return state
 }
}

export default users;