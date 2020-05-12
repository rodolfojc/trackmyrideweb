const bikeModel = require("../models/Bike.js");


module.exports = async (req, res) => {
    // const id =  mongoose.Types.ObjectId(req.session.userId);

     const id = req.session.userId;
    console.log(req.session.userId);

  try {
    
    const userBikeDetails = await bikeModel.findOne({userId: id}); 
    if(!userBikeDetails) {

      throw new Error('User has no data registered');
      
    }
    console.log(userBikeDetails);
      res.render("profile",  {userBikeDetails: userBikeDetails});
      return userBikeDetails;
    } catch (error) {
    console.log(`findOne error--> ${error}`);
  
    res.render("profile", {noData : true} ); 
  
    return error;
    
}
//receive a tru or false if no data is in the profile
  //Find the bikes this user id has and render to the profile page

  //Find the reports this user id has and render to the profile page


 //  res.render("profile", { userId: userId });
   
}