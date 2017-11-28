const axios = require('axios');

export const LOGOUT_USER = 'LOGOUT_USER';


export const logoutUser = () => {
  localStorage.clear(); //not sure if this is applicable to mobile app user - check with instructor
  return function(dispatch){
    console.log('logout from actions', dispatch)
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