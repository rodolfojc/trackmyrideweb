// Return the latest parking spot added to the database

const rackModel = require("../models/Racks.js");


module.exports = async (req, res) => {
  const userId = req.session.userId; //user ID
  const rack = rackModel.findOne().sort({created_at: -1}); //Find the latest created
  console.log(rack);
 res.render("map", { userId: userId , rack:rack}); //render map page

};
