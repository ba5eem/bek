import { LOAD_SHIFTS,ADD_SHIFT } from '../actions/shifts.js';


const shifts = (state = [], action) => {

  switch(action.type){
    case LOAD_SHIFTS:
      return action.shifts;
    case ADD_SHIFT:
      return action.shifts;
    default:
      return state
  }
}

export default shifts;