const express = require('express') //importing that dependency
const app = express() //creating a new object to utilize dependency
const port = 3001   //customize the port

//"/" is the route
//req is something you are getting in
//res is sending a response back
//once you put "api" it changes the route
//you would have to put "localhost:3000/api" to see the key again
app.get('/api/get/world', (req, res) => {  
  //with "send" you can put just "Shaw" and it would return just that
  //this is what you want to send back upon receiving the request
  res.redirect('https://jsonplaceholder.typicode.com/users')
  console.log(req.data);
})

//this is a post api
//you need some type of data with a post/put/delete API
//on local host it would look like "localhost:3001/api/post"
//make sure on Postman you set the request to "post" not get
//do the same for (get, post, put, delete)
app.post('/api/post', (req,res)=> {
  
  res.send('Success');
  console.log(req.data);
})

app.delete('/api/shaw/delete', (req, res) => {
  res.send('Success');
  console.log(req, data);
})

app.put('/api/put/data', (req, res) => {
  res.send('Success');
  console.log(req, data);
})

app.get('/api/get/world', (req, res) => {
  res.send('Hello World');
  console.log(req, data);
})

app.delete('api/delete/city', (req, res) => {
  res.send('Hooray');
  console.log(req, data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//npm install to install packages
//npm run start
//created a custom API
//these are the fundamentals of how to create an API
//when creating APIs it is your duty to not leak sensitive info
