const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");

require('dotenv').config({ path: require('find-config')('.env') });


app.get("/api/test", () => {
    console.log("test is successfull");
});

mongoose
  .connect(process.env.MONGO_URL) //for secret key
  .then(() => console.log("DB Connection Successfull!"))  //.then for prom
  .catch((err) => {
    console.log(err); //For view errors
  });


app.use(express.json());

  //Rest API Routes
  app.use("/api/users", userRoute);
  app.use("/api/auth", authRoute);
  app.use("/api/products", productRoute);
 app.use("/api/cart", cartRoute);
 app.use("/api/orders", orderRoute);


  app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });