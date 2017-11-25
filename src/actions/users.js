const axios = require('axios');

export const LOAD_USERS = 'LOAD_USERS';
export const ADD_USER = 'ADD_USER';

export const loadUsers = () => {
  return function(dispatch){
    return axios.get('/users')
    .then( users => {
      dispatch({
        type: LOAD_USERS,
        users: users.data
      });
    });
  }
}

export const addUser = (newUser) => {
  console.log('from user action: ',newUser)
  return function(dispatch){
    return axios.post('/api/users',newUser)
    .then( user => {
      dispatch({
        type: ADD_USER,
        user: user.data
      });
    });
  }
}
