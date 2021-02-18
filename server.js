'use strict';

const express = require('express');

const server = express();

const PORT = process.env.PORT || 2000; 

server.use(express.static('./public'));

//////// testing the port
server.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`)
})


server.get('/test',(request,response)=>{
  response.send('my server is working!!');
})

server.get('/infor',(req,res)=>{
  let info = [
    {name:'Husam'},
    {age:'26'},
    {City:'Amman'}
  ];
  res.send(info);
})
