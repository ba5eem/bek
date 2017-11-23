const axios = require('axios');

export const EDIT_PASSWORD = 'EDIT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';



export const editPassword = (newInfo) => {
  return function(dispatch){
    return axios.put(`/api/password/${newInfo.id}`, newInfo)
    .then (user => {
      dispatch({
        type: EDIT_PASSWORD,
        user: user
      });
    });
  }
}

export const resetPassword = (newInfo) => {
  return function(dispatch){
    return axios.put(`/api/password/${newInfo.id}/reset`, newInfo)
    .then( user => {
      dispatch({
        type: RESET_PASSWORD,
        user: user
      });
    });
  }
}