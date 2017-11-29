const axios = require('axios');

export const ACTION_SMS = 'ACTION_SMS';
export const SMS_SHIFT = 'SMS_SHIFT';

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
  let local = []
  return function(dispatch){
    return axios.get('/api/users/phone')
    .then((phone)=>{
      local.push(phone);
      local.push(body)
      return axios.post('/api/sms/absent', local)
        .then( () => {
          return axios.put('/api/shifts/update',body)
            .then(()=> {
              return axios.get('/api/shifts')
                .then((shifts) =>{
                    dispatch({
                      type: SMS_SHIFT,
                      shifts: shifts.data
                      });
                    })
                  })
                })
              });
            }
          }