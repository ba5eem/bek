const axios = require('axios');

export const LOAD_USERS = 'LOAD_USERS';
export const EDIT_USER = 'EDIT_USER';

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

export const editUser = (newInfo) => {
  return function(dispatch){
    return axios.put(`/api/users/${newInfo.id}`, newInfo)
    .then (user => {
      dispatch({
        type: EDIT_USER,
        user: user.data
      });
    });
  }
}

