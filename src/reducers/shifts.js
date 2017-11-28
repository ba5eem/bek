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
          }
        }
      }
      console.log(shifts);
      return shifts;
    case ADD_SHIFT:
      return state;
    default:
      return state
  }
}

export default shifts;