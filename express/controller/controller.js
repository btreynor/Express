const express = require('express')
const app = express() 
const port = 3001  

app.get('/', function(req, res) {
  res.json({
    number: 1
  });
});
  
app.get('/multiple', function(req, res) {
  res.json({
    number: 1,
    name: 'Brendan',
    gender: 'male'
  });
});
  
app.get('/array', function(req, res) {
  res.json([{
      number: 1,
      name: 'Travis',
      gender: 'male'
    },
    {
      number: 2,
      name: 'Tanya',
      gender: 'female'
    }
  ]);
});
  
app.listen(3001, function(req, res) {
  console.log("Server is running at port 3001");
});



