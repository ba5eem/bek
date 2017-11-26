const axios = require('axios');

export const ACTION_SMS = 'ACTION_SMS';


export const actionsms = (body) => {
  return function(dispatch){
    return axios.post('/api/sms', body)
    .then( sms => {
      console.log('sms from actions--->', sms )
      dispatch({
        type: ACTION_SMS,
        sms: sms.data
      });
    });
  }
}