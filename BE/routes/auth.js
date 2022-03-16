const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    });

  //LOGIN

router.post('/login', async (req, res) => {
  try{
      const user = await User.findOne(
           {
               userName: req.body.user_name
           }  //so if you find something else then gp back to username
      );

      //If no user the response will be 401
       !user && res.status(401).json("Wrong User Name");


      //hash password
       const hashedPassword = CryptoJS.AES.decrypt(
          user.password,
           process.env.PASS_SEC
       );

        //pass into string
       const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

       const inputPassword = req.body.password;
      

      //If nO PASS the response will be 401
       originalPassword != inputPassword && 
          res.status(401).json("Wrong Password");

      const accessToken = jwt.sign(
      {
          id: user._id,
          isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
          {expiresIn:"3d"} //exp in 3 days 
      );

       const { password, ...others } = user._doc;  
       res.status(200).json({ accessToken});

  }catch(err){
    
      res.status(500).json(err);
    
  }

});


module.exports = router;