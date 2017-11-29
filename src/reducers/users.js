import { LOAD_USERS,ADD_USER, EDIT_PHONE } from '../actions/users.js';


const users = (state = [], action) => {

 switch(action.type){
   case LOAD_USERS:

     return action.users;

   case ADD_USER:
     return action.user;

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