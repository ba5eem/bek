
let local = {};

export function createShift(e){

  if(e.target.name === 'title'){
    if(e.target.value !== undefined){
      local.title=e.target.value;
    } 
  }
  if(e.target.name === 'summary'){
    if(e.target.value !== undefined){
      local.summary=e.target.value;
    } 
  }
  if(e.target.name === 'role'){
    if(e.target.value !== undefined){
      local.role=e.target.value;
    } 
  }
  if(e.target.name === 'month'){
    if(e.target.value !== undefined){
      local.month=e.target.value;
    } 
  }
  if(e.target.name === 'day'){
    if(e.target.value !== undefined){
      local.day=e.target.value;
    } 
  }
  if(e.target.name === 'start'){
    if(e.target.value !== undefined){
        if(e.target.value !== 'SELECT START TIME'){
          local.start=e.target.value;
        }
      } 
    }
  if(e.target.name === 'end'){
    if(e.target.value !== undefined){
        if(e.target.value !== 'SELECT START TIME'){
          local.end=e.target.value;
        }
      } 
    }

  if(local.end !== undefined && local.start !== undefined){
    return false;
  }

  return local;
}

export function clearLocal(){
  local = {};
}

export default { createShift, clearLocal };