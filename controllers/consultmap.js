const rackModel = require("../models/Racks.js");


module.exports = async (req, res) => {
  const userId = req.session.userId;

  const racks = await rackModel.find({}) ;    
  console.log("Racks from ctrl" + racks);
  res.render("map", { userId: userId , racks:racks});
};
