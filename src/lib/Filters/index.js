
export function filterAll(arr,key,query){
  const res = arr.filter((elem) => {
    return elem[key] === query;
  });

  return res;
}



export function filterNum(arr,key,query){
  const res = arr.filter((elem) => {
    return elem[key] === parseInt(query);
  });

  return res;
}

export default { filterAll, filterNum };