const axios = require('react-native-axios');
import request from "react-native-axios";

export const LOAD_USERS = 'LOAD_USERS';
export const EDIT_USER = 'EDIT_USER';

/*export const loadUsers = () => {
  return function(dispatch){
    return axios.get('/users')
    .then( users => {
      dispatch({
        type: LOAD_USERS,
        users: users.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}*/

/*export const loadUsers = () => dispatch => {
  request.get('/users')
    .then (users => {
      dispatch ( {
        type: LOAD_USERS,
        data: users.data
      });
    });
}*/

export const loadUsers = () => {
 fetch('http://localhost:8080/users')
  .then(function(response) {
    return response.json()
  })
}

export const editUser = (newInfo) => {
  return function(dispatch){
    return axios.put(`/users/${newInfo.id}`, newInfo)
    .then (user => {
      dispatch({
        type: EDIT_USER,
        user: user.data
      });
    });
  }
}

