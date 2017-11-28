import { LOAD_SHIFTS,ADD_SHIFT } from '../actions/shifts.js';
var moment = require('moment');

const shifts = (state = [], action) => {

  switch(action.type){
    case LOAD_SHIFTS:
      let shifts = action.shifts;
      for (var i = 0; i < shifts.length; i ++){
        let res = shifts[i].date;
          if(res !==undefined){
          //let x = res.slice(0,-15);
          shifts[i].date = res.slice(0,-15);

          }
         
      }
      console.log(shifts);


      return action.shifts;
    case ADD_SHIFT:
      return action.shifts;
    default:
      return state
  }
}

export default shifts;