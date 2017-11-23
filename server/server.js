const express = require('express');
const app = express();

app.get('/',(req,res) =>{
  res.json('aloha');
})

const server = app.listen(8080, ()=>{
  console.log('Aloha brah - servers up!')
})