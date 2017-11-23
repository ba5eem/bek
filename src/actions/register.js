const axios = require('axios');


export const ADD_USER = 'ADD_USER';


export const addUser = (newUser) => {
  return function(dispatch){
    return axios.post('/auth/google', newUser)
    .then( user => {
      dispatch({
        type: ADD_USER,
        user: user.data
      });
    });
  }
}