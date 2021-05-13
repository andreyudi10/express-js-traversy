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
  // static articles
  let articles = [
    {
      id:1,
      title:'Article one',
      author:'andri',
      body:'this is first article'
    },
    {
      id:2,
      title:'Article two',
      author:'andri',
      body:'this is second article'
    },
    {
      id:3,
      title:'Article three',
      author:'andri',
      body:'this is third article'
    },
  ];

  // res.send("live sending");  
  res.render("index", {
    title:'Hello',
    articles:articles
  });
  //send something to browser
})

// add route
app.get('/articles/add', (req,res)=>{
  res.render('add_Article',{
    title:'Add Article'
  })
})

app.listen(3000, ()=>{
  console.log('server started on poert 3000...')
})
