const rackModel = require("../models/Racks.js");


module.exports = async (req, res) => {
  const userId = req.session.userId;

  let racks = null;    
  // console.log("Racks from ctrl" + racks);
 // res.render("map", { userId: userId});
 res.render("map", { userId: userId , racks:racks});
};
