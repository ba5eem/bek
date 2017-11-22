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



/*const initialState = [];

export default function users(state = initialState, action){
    let result = [];
    switch (action.type) {
    case "LOAD_USERS":
        result = action.data;
        break;
    default:
        result = state;
        break;
    }
    console.log("Result posts: ", result);
    return result === undefined ? [] : result;
}*/

//export default users;