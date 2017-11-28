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


export const notifySms = (body) => {
  return function(dispatch){
    return axios.post('/api/sms/notify', body)
    .then( sms => {
      console.log('sms from actions--->', sms )
      dispatch({
        type: ACTION_SMS,
        sms: sms.data
      });
    });
  }
}

export const absentSms = (body) => {
  return function(dispatch){
    return axios.post('/api/sms/absent', body)
    .then( sms => {
      console.log('sms from actions--->', sms )
      dispatch({
        type: ACTION_SMS,
        sms: sms.data
      });
    });
  }
}