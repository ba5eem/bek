const axios = require('axios');

export const LOAD_USERS = 'LOAD_USERS';
export const ADD_USER = 'ADD_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const EDIT_PHONE = 'EDIT_PHONE';


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


export const addUser = (newUser) => {
  console.log('from user action: ',newUser)
  return function(dispatch){
    return axios.post('/api/login',newUser)
    .then( user => {
      dispatch({
        type: ADD_USER,
        user: user.data
      });
    });
  }
}


export const editPhone = (newInfo) => {
  console.log('server newInfo --- >(1)', newInfo.id)
  return function(dispatch){
    return axios.put(`/api/users/${newInfo.id}/editphone`, newInfo)
    .then (user => {
      console.log('server user --- >(2)', user)
      dispatch({
        type: EDIT_PHONE,
        user: user.data
      });
    });
  }
}

