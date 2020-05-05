const BikeInfoPage = require("../models/User.js");

module.exports = async (req, res) => {
  const bikeInfoPage = await BikeInfoPage.find({});
  res.render("bikeinfo",  {bikeInfoPage: bikeInfoPage});
};
