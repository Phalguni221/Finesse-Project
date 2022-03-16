
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
app.use('/dress', require('./controllers/dress'));

app.post('/', (req,res) => {
  res.render('dresses')
})

app.get('/', (req, res) => {
  res.render('dresses/index')
})

mongoose
  .connect("mongodb://localhost:27017/fashion") //for secret key
  .then(() => console.log("DB Connection Successfull!"))  //.then for prom
  .catch((err) => {
    console.log(err); //For view errors
  });

app.listen(process.env.PORT || 3500, () => {
  console.log("Backend server is running!");
});

// mongoose
//   .connect("mongodb://localhost:27017/fashion") //for secret key
//   .then(() => console.log("DB Connection Successfull!"))  //.then for prom
//   .catch((err) => {
//     console.log(err); //For view errors
//   });


// const dressRouter = require('./controllers/dress'); 
// app.use('/', require('./controllers/dress'));

// app.get('/', (req, res) => {
//   res.render('home')
// })

// app.get('/dress/edit', (req, res) => {
//   res.render('Editpage')
// })

// app.get('/dress/shoppingcart', (req, res) => {
//   res.render('Deletepage')
// })

// app.get('/dress/:id/comment', (req, res) => {
//   res.render('Commentpage')
// })

// app.post('/dress', (req,res) => {
// res.render('Dress')
// })


