
export function filterAll(arr,key,query){
  if(query){

    console.log(query)
    console.log(key);
  const res = arr.filter((elem) => {
    return elem[key] === query;
  });
  console.log(res);
  return res;
  }
  else{
    return arr;
  }
}

export function filterOpen(arr,key,query){
  const res = arr.filter((elem) =>{
    return elem[key] === query;
  })
  return res;
}
export function filterClosed(arr,key,query){
  const res = arr.filter((elem) =>{
    return elem[key] === query;
  })
  return res;
}



export function filterNum(arr,key,query){
  if(query){
    console.log(query);
    console.log(arr);
  const res = arr.filter((elem) => {
    return elem[key] === parseInt(query);
  });
  console.log(res);
  return res;
  }
  else{
    console.log(arr)
    return arr;
  }
}

export default { filterAll, filterNum, filterOpen,filterClosed };