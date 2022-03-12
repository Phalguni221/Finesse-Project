//Modules and Globals
require('dotenv').config()
const express = require('express')
const res = require('express/lib/response')
const methodOverride = require('method-override')
const app = express()

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.use(express.static('assets'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Routes
// app.get('/', (req, res) => {
//     res.render('Home')
//   })


  app.get('/Home/ShoppingCart', (req, res) => {
    res.render('ShoppingCart')
  })