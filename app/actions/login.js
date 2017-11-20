const axios = require('axios');


export const LOGIN_USER = 'LOGIN_USER';


export const loginUser = (newUser) => {
  return function(dispatch){
    return axios.post('/api/login',newUser)
    .then( user => {
      dispatch({
        type: LOGIN_USER,
        user: user.data
      });
    });
  }
}


