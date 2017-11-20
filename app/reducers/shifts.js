import { LOAD_SHIFTS,ADD_SHIFT,EDIT_SHIFT,DEL_SHIFT } from '../actions/shifts.js';


const shifts = (state = {}, action) => {

  switch(action.type){
    case LOAD_SHIFTS:
      return action.shifts;

    case ADD_SHIFT:
      return action.shift;

    case EDIT_SHIFT:
      return action.shift;

    case DEL_SHIFT:
      return action.shift;

    default:
      return state
  }
}

export default shifts;