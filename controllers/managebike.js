const ManageBikePage = require("../models/Bike.js");

module.exports = async (req, res) => {
  const bike = await ManageBikePage.find({});
  isfalse = 2;
  res.render("managebike", {
    bike: bike,
    isfalse: isfalse,
  });
  console.log(bike);
};
