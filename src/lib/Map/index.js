export function mapKeys(arr){
  var keys = arr.map((elem) =>{
    return Object.keys(elem);
  })
  return keys;
}

export function mapValues(arr){
  var values = arr.map((elem) =>{
    return Object.values(elem);
  })
  return values;
}

export function mapArr(arr){
  var res = arr.map((elem) =>{
    return elem;
  })
  return res;
}




export default { mapKeys, mapValues, mapArr };