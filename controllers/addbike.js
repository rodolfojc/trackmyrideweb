//Author: Yuri Braga
//Route to add a new bike
// Importing DB Bikes#
const axios = require("axios");
//const bikeModel = require("../models/Bike.js");

//Function to create a new Bike

module.exports = async (req, res) => {
  // console.log(req.body);
  console.log(req.session.userId);
  // userId = req.session.userId;
  let {serial, brand, color, type, status, locker, userId} = req.body;
  //userId = req.session.userId;

  try {
    const response = await axios({
      method: "POST",
      url: "http://34.247.183.192:3000/registerbike",
      headers: { "Content-Type": "application/json" },
      data: {
        serial,
        userId: req.session.userId, 
        brand,
        color,
        type,
        status,
        locker
      },
    });
    console.log(response);
    console.log(req.session.userId);
    res.render("managebike");
    
  } catch (err) {
    console.log(err);
    res.redirect("/managebike");  
  }  
};
