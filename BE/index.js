
const express = require('express')
const mongoose = require('mongoose')
const res = require('express/lib/response')
const methodOverride = require('method-override')
const app = express()

//Express Settings
app.set('Views', __dirname + '/Views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
require('dotenv').config({ path: require('find-config')('.env') });

// const dressRouter = require('./controllers/dress'); 
app.use('/', require('./controllers/dress'));


// app.use('/cart', require('./controllers/dress'));

app.post('/', (req,res) => {
  res.render('dresses')
})

app.get('/Edit', (req, res) => {
  res.render('Editpage')
})

app.get('*', (req, res) => {
  res.render('error404')
})

// app.get('/', (req, res) => {
//   res.render('dresses/index')
// })



app.post('/', (req,res) => {
  res.render('dresses')
})


mongoose
  .connect("mongodb://localhost:27017/Finesse") //for secret key
  .then(() => console.log("DB Connection Successfull!"))  //.then for prom
  .catch((err) => {
    console.log(err); //For view errors
  });

app.listen(process.env.PORT || 3500, () => {
  console.log("Backend server is running!");
});


