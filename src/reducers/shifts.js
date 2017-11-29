import { LOAD_SHIFTS,ADD_SHIFT } from '../actions/shifts.js';
import { SMS_SHIFT } from '../actions/sms';
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
      return shifts;


    case ADD_SHIFT:
    console.log('helo')
      let x = action.shifts.pop()
      console.log(x);
      let idx = state.findIndex((elem) => {
       return elem.id === x.id
     });
     return [ ...(state.slice(0, idx)), x, ...(state.slice((idx + 1), state.length))];



    case SMS_SHIFT:
      let res = action.shifts.pop()
      console.log(res.id);
      let index = state.findIndex((elem) => {
       return elem.id === res.id
     });
     return [ ...(state.slice(0, index)), res, ...(state.slice((index + 1), state.length))];
    default:
      return state
  }
}

export default shifts;