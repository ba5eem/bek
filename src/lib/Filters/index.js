
export function filterAll(arr,key,query){
  if(query){


  const res = arr.filter((elem) => {
    return elem[key] === query;
  });

  return res;
  }
  else{
    return arr;
  }
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
    return arr;
  }
}

export default { filterAll, filterNum };