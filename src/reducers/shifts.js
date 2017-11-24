import { LOAD_SHIFTS } from '../actions/shifts.js';


const shifts = (state = [], action) => {

  switch(action.type){
    case LOAD_SHIFTS:
      return action.shifts;
    default:
      return state
  }
}

export default shifts;