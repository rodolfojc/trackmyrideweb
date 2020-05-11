const bikeModel = require("../models/Bike.js");

module.exports = async (req, res) => {
    const id = req.body.serial;
  //  const bikeInfoPage = await bikeModel.find({});
  try {
    
    const bikeInfoPage = await bikeModel.findOne({serial: id});  
    if(!bikeInfoPage) {
      throw new Error('no document found');
    }
      res.render("bikeResults",  {bikeInfoPage});
      return bikeInfoPage;
    } catch (error) {
    console.log(`findOne error--> ${error}`);
    res.redirect('/bikeinfo');
    return error;
    
}
    
  //res.render("bikeResults",  {bikeInfoPage});
    //console.log(bikeInfoPage);
    //console.log(typeof bikeInfoPage);
    //res.render("bikeResults",  {bikeInfoPage});
    // res.render("bikeResults",  {bikeInfoPage: bikeInfoPage});
}
