const bikeModel = require("../models/Bike.js");

module.exports = async (req, res) => {
  const userId = req.session.userId; 
    const id = req.params.id;
  //  const bikeInfoPage = await bikeModel.find({});
    
    const success = await bikeModel.findByIdAndUpdate(id, {$push: {report: req.body.description}}, {new: true}) ;    
 
    //res.send(success);
   res.redirect("/bikeinfo", {userId: userId});
   
}