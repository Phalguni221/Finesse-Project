const express = require("express");
const mongoose = require("mongoose");


require('dotenv').config({ path: require('find-config')('.env') });
const cors = require("cors");
const app = express()
// const res = require('express/lib/response')
const methodOverride = require('method-override')

//Express Settings
app.set('Views', __dirname + '/Views')
app.set('view engine', 'jsx')

app.engine('jsx', require('express-react-views').createEngine());
app.use(cors());
app.use(express.static('public'))
app.use( express.static('index') );

app.use(express.json());
// app.use(express.static(path.join(_dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.listen(process.env.PORT || 3500, () => {
  console.log("Backend server is running!");
});

// mongoose
//   .connect("mongodb://localhost:27017/Finesse") //for secret key
//   .then(() => console.log("DB Connection Successfull!"))  //.then for prom
//   .catch((err) => {
//     console.log(err); //For view errors
//   });


// const dressRouter = require('./controllers/dress'); 
app.use('/', require('./controllers/dress'));

app.get('/', (req, res) => {
  res.render('home')
})

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


