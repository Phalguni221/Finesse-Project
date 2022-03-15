const express = require("express");
const mongoose = require("mongoose");


require('dotenv').config({ path: require('find-config')('.env') });
const cors = require("cors");

const dressRouter = require('./controllers/dress');

const app = express()
// require('dotenv').config({ path: require('find-config')('.env') });

// app.get('/dress', dressRouter)
// const app = express();

// require('dotenv').config()
// const express = require('express')
const res = require('express/lib/response')
const methodOverride = require('method-override')

//Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')

app.engine('jsx', require('express-react-views').createEngine());
app.use(cors());
// app.use(logger("dev"));
app.use(express.json());
// app.use(express.static(path.join(_dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/dress', dressRouter);
// app.post('/dress', (req,res) => {
//   res.render('dress')
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

app.listen(process.env.PORT || 3500, () => {
  console.log("Backend server is running!");
});


mongoose
  .connect("mongodb://localhost:27017/Finesse-Project") //for secret key
  .then(() => console.log("DB Connection Successfull!"))  //.then for prom
  .catch((err) => {
    console.log(err); //For view errors
  });

