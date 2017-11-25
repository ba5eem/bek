const axios = require('axios');

export const LOAD_SHIFTS = 'LOAD_SHIFTS';
export const ADD_SHIFT = 'ADD_SHIFT';

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

export const addShift = (newShift) => {
  console.log('from action: ',newShift)
  return function(dispatch){
    return axios.post('/api/shifts/new',newShift)
    .then( shift => {
      dispatch({
        type: ADD_SHIFT,
        shift: shift.data
      });
    });
  }
}