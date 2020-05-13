const bikeModel = require("../models/Bike.js");
const userModel = require("../models/User.js");

 module.exports = async (req, res) => {
  
    const id = req.session.userId; //Logged user
         
         await Promise.all([ //Execute both queries
            //Return the user object
            userModel.findById({_id: id}),
             //Find the bikes the user have and return the object
            bikeModel.findOne({userId: id})
          ]).then( (result) => {
            let userBikeDetails = result[1]; //Assign user object
            let accountDetails = result[0]; //Assign bikes object
            //Display profile page and send both user and bike objects
            res.render("profile",  {userBikeDetails: userBikeDetails, accountDetails: accountDetails})
              
          }).catch(err =>{
             console.log(err);
          });
   
}


//CODE BELOW IS WORKING

// module.exports = async (req, res) => {


//      const id = req.session.userId;
//     console.log(req.session.userId);

//   try {
    
//     const userBikeDetails = await bikeModel.findOne({userId: id}); 
//     if(!userBikeDetails) {

//       throw new Error('User has no data registered');
      
//     }
//     console.log(userBikeDetails);
//       res.render("profile",  {userBikeDetails: userBikeDetails});
//       return userBikeDetails;
//     } catch (error) {
//     console.log(`findOne error--> ${error}`);
  
//     res.render("profile", {noData : true} ); 
  
//     return error;
    
// }
   
// }