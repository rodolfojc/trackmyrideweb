//Author: Yuri Braga
//Route to add a new bike
// Importing DB Bikes
const bikeModel = require("../models/Bike.js");

//Function to create a new Bike

module.exports = async (req, res) => {
  console.log("add bikE METHOD: " + req.body);
  bikeModel.create(req.body, (error, bikes) => {
    res.redirect("/managebike");
  });
};
