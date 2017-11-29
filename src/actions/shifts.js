const axios = require('axios');

export const LOAD_SHIFTS = 'LOAD_SHIFTS';
export const ADD_SHIFT = 'ADD_SHIFT';
export const EDIT_SHIFT = 'EDIT_SHIFT';
export const DELETE_SHIFT = 'DELETE_SHIFT';
export const LOAD_PHONE = 'LOAD_PHONE';

export const loadShifts = () => {
  let local = [];
  return function(dispatch){
    return axios.get('/api/users')
    .then((users) => {
      local.push(users.data)
    return axios.get('/api/shifts')
    .then( shifts => {
      local.push(shifts.data)
      dispatch({
        type: LOAD_SHIFTS,
        shifts: local
      });
      })
    });
  }
}

export const addShift = (newShift) => {
  let local = [];
  return function(dispatch){
    return axios.post('/api/shifts/new',newShift)
    .then( () => {
      return axios.get('/api/shifts')
      .then( (shifts) => {
        local.push(shifts);
        return axios.get('/api/users/phone')
        .then((phone) =>{ 
          local.push(phone);
        return axios.post('/api/sms/notify', local )
        .then(() =>{
          return axios.get('/api/shifts')
            .then((shifts) =>{
              console.log(shifts);
        dispatch({
        type: ADD_SHIFT,
        shifts: shifts.data
      });
        })
    })
        })
      })  
    });
  }
}


export const editShift = (newInfo) => {
  return function(dispatch){
    return axios.put(`/api/shifts/${newInfo.id}`, newInfo)
    .then( shift => {
      dispatch({
        type: EDIT_SHIFT,
        shift: shift.data
      });
    });
  }
}

export const deleteShift = (id) => {
  return function(dispatch){
    return axios.delete(`/api/shift/${id}`)
    .then ( shift => {
      dispatch ({
        type: DELETE_SHIFT,
        shift: shift.data
      })
    })
  }
}
