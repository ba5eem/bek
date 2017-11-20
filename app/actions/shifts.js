const axios = require('axios');

export const LOAD_SHIFTS = 'LOAD_SHIFTS';
export const ADD_SHIFT = 'ADD_SHIFT';
export const EDIT_SHIFT = 'EDIT_SHIFT';
export const DEL_SHIFT = 'DEL_SHIFT';

export const loadShifts = () => {
  return function(dispatch){
    return axios.get('/api/shifts')
    .then( shifts => {
      dispatch({
        type: LOAD_SHIFTS,
        shifts: shifts.data
      });
    });
  }
}

export const addShift = (newData) => {
  return function(dispatch){
    return axios.post('/api/shift',newData)
    .then( shift => {
      dispatch({
        type: ADD_SHIFT,
        shift: shift.data
      });
    });
  }
}

export const editShift = (newData) => {
  return function(dispatch){
    return axios.put('/api/shift',newData)
    .then( shift => {
      dispatch({
        type: EDIT_SHIFT,
        shift: shift.data
      });
    });
  }
}

export const deleteShift = (shift) => {
  return function(dispatch){
    return axios.delete('/api/shift',shift)
    .then( shift => {
      dispatch({
        type: DEL_SHIFT,
        shift: shift.data
      });
    });
  }
}