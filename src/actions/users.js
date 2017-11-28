const axios = require('axios');

export const LOAD_USERS = 'LOAD_USERS';
export const ADD_USER = 'ADD_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
//export const GETONE_USER = 'GETONE_USER';

export const loadUsers = () => {
  console.log('loadusers to server ' )
  return function(dispatch){
    return axios.get('/api/users')
    .then( users => {
      console.log('loadusers? ', users )
      dispatch({
        type: LOAD_USERS,
        users: users.data
      });
    });
  }
}
/*
export const getOneUser = (users) => {
  console.log('getone --->actions ', users )
  return function(dispatch){
    return axios.get(`/api/users/${users.id}`)
    .then( user => {
      dispatch({
        type: GETONE_USER,
        user: user.data
      });
    });
  }
}*/

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

export const logoutUser = () => {
  localStorage.clear();
  return function(dispatch){
    return axios.get('/api/logout')
    .then( () => {
      dispatch({
        type: LOGOUT_USER,
        user: null
      });
    });
  }
}