Please use this README to further understand the appropriate use cases from the LIB_HELPER Functions:

/lib/Filters/index.js

1. filterAll(arr,key,query)
  arr - the array of object you are working with
  key - the object key you need to filter
  query - the value of that key your looking for

2. filterNum(arr,key,query)
  the only difference here is that parseInt is built in to support when query is number as a string

  Use case example:
  
```javascript
function filterAll(arr,key,query){
  var res = arr.filter((elem) => {
    return elem[key] === query;
  });

  return res;
}

var array = [{name: "baseem",
              role: "student", 
              color: "blue "},
             {name:"Ella",
              role: "student",
              color: "red"},
             {name:"Krissy",
              role: "student",
              color: "yellow"}];

var res = filterAll(array,'color','red');
console.log(res);

result: [[object Object] {
  color: "red",
  name: "Ella",
  role: "student"
}]
```

/lib/Map/index.js

1. Map methods to find keys, values and map entire array of objects

  Use case example:

```javascript
function mapKeys(arr){
  var keys = arr.map((elem) =>{
    return Object.keys(elem);
  })
  return keys;
}

var array = [{name: "baseem",
              role: "student", 
              color: "blue "},
             {name:"Ella",
              role: "student",
              color: "red"},
             {name:"Krissy",
              role: "student",
              color: "yellow"}];

var res = mapKeys(array);
console.log(res);
res: [["name", "role", "color"], ["name", "role", "color"], ["name", "role", "color"]]
```


/lib/Sort/index.js

1. Lodash has been required in:
 - Please see https://lodash.com/docs for available use cases


