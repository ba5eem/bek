const axios = require('axios');


export const ADD_USER = 'ADD_USER';


export const addUser = (newUser) => {
  return function(dispatch){
    return axios.post('/api/register', newUser)
    .then( user => {
      dispatch({
        type: ADD_USER,
        user: user.data
      });
    });
  }
}