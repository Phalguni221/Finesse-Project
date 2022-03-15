const express = require("express");
const app = express();
const mongoose = require("mongoose");

require('dotenv').config({ path: require('find-config')('.env') });




mongoose
  .connect(process.env.MONGO_URL) //for secret key
  .then(() => console.log("DB Connection Successfull!"))  //.then for prom
  .catch((err) => {
    console.log(err); //For view errors
  });


  //Rest API Routes

  app.use('/dress', require('./controllers/dress'))


  app.listen(process.env.PORT || 3001, () => {
    console.log("Backend server is running!");
  });

  
app.post('/Dress', (req,res) => {
  res.render('Dress')
})