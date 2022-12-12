// MODULES AND GLOBALS
require('dotenv').config
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

// CONTROLLER AND ROUTES
app.use('/books', require('./controllers/books'))
app.use(cors())

app.get('/', function (req,res){
    res.send('Hello World') 
})

app.get('*', function (req,res) {
    res.status(404).render('error404') 
})

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
   
  
// LISTEN FOR CONNECTIONSHHHHH
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })
app.listen(process.env.PORT)