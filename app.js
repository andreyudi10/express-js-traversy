const express = require('express');
const path = require('path');

// init
const app = express();

// then create routes

// pug folder location
app.set('views', path.join(__dirname,'views'));
// Load view engine
app.set('view engine', 'pug');

// home route
app.get('/', (req, res) =>{
  // res.send("live sending");
  res.render("index");
  //send something to browser
})

app.listen(3000, ()=>{
  console.log('server started on poert 3000...')
})
