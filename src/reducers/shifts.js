import { LOAD_SHIFTS,ADD_SHIFT } from '../actions/shifts.js';
//var moment = require('moment');

const shifts = (state = [], action) => {

  switch(action.type){
    case LOAD_SHIFTS:
      let shifts = action.shifts[1];
      let users = action.shifts[0];
      for(var i = 0; i < shifts.length; i++){
        for (var j = 0; j < users.length; j++){
          if(shifts[i].description===users[j].email){
              shifts[i].userimage = users[j].image;
              shifts[i].useremail = users[j].email;
              shifts[i].userid = users[j].id;
              shifts[i].admin = users[j].admin;
              shifts[i].closed = true;
            }
          }
      }
      console.log(shifts);
      return shifts;
    case ADD_SHIFT:
      console.log(shifts)
      let index = state.findIndex((shifts) => {
       return shifts.id === action.shifts.id
     });
     console.log([ ...(state.slice(0, index)), action.shifts, ...(state.slice((index + 1), state.length))])
     return [ ...(state.slice(0, index)), action.shifts, ...(state.slice((index + 1), state.length))];
    default:
      return state
  }
}

export default shifts;