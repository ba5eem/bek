let local = {};

export function createShift(e){

  if(e.target.name === 'summary')    { local.name=e.target.value; }
  if(e.target.name === 'location')   { local.location=e.target.value }
  if(e.target.name === 'description'){ local.description=e.target.value; }
  if(e.target.name === 'startTime')  { local.startTime=e.target.value; }
  if(e.target.name === 'endTime')    { local.endTime=e.target.value; }


  console.log('local', local)
  return local;
}

export function clearLocal(){
  local = {};
}

export default { createShift, clearLocal };