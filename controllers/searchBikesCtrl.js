const bikeModel = require("../models/Bike.js");

module.exports = async (req, res) => {
    const id = req.body.serial;
    const bikeInfoPage = await bikeModel.findOne({serial: id}) ;    
    
        res.send(
            bikeInfoPage,
        );
}
