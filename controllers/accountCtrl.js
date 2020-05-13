const userModel = require("../models/User.js");


module.exports = async (req, res) => {
     const id = req.params.id;
   
  try {
    
     await userModel.findByIdAndDelete({_id: id}); 
     
    
      res.redirect("/");
     
    } catch (error) {
    console.log(`Delete account error--> ${error}`);

    
}
   
}