//FIND BIKES BY A SERIAL NUMBER

const BikeInfoPage = require("../models/User.js");


module.exports = async (req, res) => {

  const userId = req.session.userId; 
  const bikeInfoPage = await BikeInfoPage.find({});
  console.log("From bike serial page : " +userId);
  res.render("bikeinfo",  {bikeInfoPage: bikeInfoPage, userId: userId});
};
