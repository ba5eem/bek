const axios = require('axios');

export const LOAD_SHIFTS = 'LOAD_SHIFTS';


export const loadShifts = () => {
  return function(dispatch){
    return axios.get('/shifts')
    .then( shifts => {
      dispatch({
        type: LOAD_SHIFTS,
        shifts: shifts.data
      });
    });
  }
}