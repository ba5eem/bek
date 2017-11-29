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
      let res = action.shifts[2].data;
      let id = action.shifts[1];
      console.log(id);
      console.log(res);
      let index = state.findIndex((elem) => {
       return elem.id === id.id
     });
      id.closed=false;

     return [...state,id];
    default:
      return state
  }
}

export default shifts;