const axios = require('axios');


export const LOAD_USERS = 'LOAD_USERS';
export const EDIT_USER = 'EDIT_USER';

export const loadUsers = () => {
  console.log('loaduser fired')
  return function(dispatch){
    return axios.get('http://localhost:8080/users')
    .then( users => {
      console.log(users);
      dispatch({
        type: LOAD_USERS,
        users: users.data
      });
    });
    console.log('completed action');
  }
}