const bikeModel = require("../models/Bike.js");

module.exports = async (req, res) => {
  const userId = req.session.userId; 
    const id = req.params.id;
  //  const bikeInfoPage = await bikeModel.find({});
    
    const success = await bikeModel.findByIdAndUpdate(id, {$push: {report: req.body.description}}, {new: true}) ;    
 
     req.flash('GOOD', 'Report Submitted and under review. Thank you and keep Riding <i class="fas fa-bicycle"></i>', '/bikeinfo');
   
}