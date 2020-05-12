const bikeModel = require("../models/Bike.js");

module.exports = async (req, res) => {
    //const id = req.params.id;
    const bikeInfoPage = await bikeModel.find({});
    
    //const success = await bikeModel.findByIdAndUpdate(id, {$push: {report: req.body.description}}, {new: true}) ;    
 
    //res.send(success);
   res.render("profile");
   
}