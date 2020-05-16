const rackModel = require("../models/Racks.js");


module.exports = async (req, res) => {
  const userId = req.session.userId;
  const rack = rackModel.findOne().sort({created_at: -1});
  console.log(rack);

    
  // console.log("Racks from ctrl" + racks);
 // res.render("map", { userId: userId});
 res.render("map", { userId: userId , rack:rack});
 //res.render("map copy"); JUST FOR TESTS
};
