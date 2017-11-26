const axios = require('axios');

export const ACTION_SMS = 'ACTION_SMS';


export const actionsms = () => {
  return function(dispatch){
    return axios.post('/api/sms')
    .then( sms => {
      dispatch({
        type: ACTION_SMS,
        sms: sms.data
      });
    });
  }
}