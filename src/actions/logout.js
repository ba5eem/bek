const axios = require('axios');

export const LOGOUT_USER = 'LOGOUT_USER';


export const logoutUser = () => {
  return function(dispatch){
    return axios.get('/api/logout')
    .then( (status) => {
      console.log(status);
      dispatch({
        type: LOGOUT_USER,
        status: status.data
      });
    });
  }
}