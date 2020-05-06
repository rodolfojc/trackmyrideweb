const bikeModel = require("../models/Bike.js");

module.exports = async (req, res) => {
    const id = req.body.serial;
  //  const bikeInfoPage = await bikeModel.find({});
    
    const bikeInfoPage = await bikeModel.findOne({serial: id}) ;    
    console.log(bikeInfoPage);
    console.log(typeof bikeInfoPage);
    res.render("bikeResults",  {bikeInfoPage});
    // res.render("bikeResults",  {bikeInfoPage: bikeInfoPage});
}
