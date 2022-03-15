const express = require("express");
const app = express();
const mongoose = require("mongoose");

require('dotenv').config({ path: require('find-config')('.env') });

app.use('/dress', require('./controllers/dress'))

app.post('/dress', (req,res) => {
  res.render('dress')
})

app.get('/dress/edit', (req, res) => {
  res.render('Editpage')
})

app.get('/dress/shoppingcart', (req, res) => {
  res.render('Deletepage')
})

app.get('/dress/:id/comment', (req, res) => {
  res.render('Commentpage')
})

app.post('/dress', (req,res) => {
res.render('Dress')
})

app.listen(process.env.PORT || 3001, () => {
  console.log("Backend server is running!");
});


mongoose
  .connect(process.env.MONGO_URL) //for secret key
  .then(() => console.log("DB Connection Successfull!"))  //.then for prom
  .catch((err) => {
    console.log(err); //For view errors
  });

