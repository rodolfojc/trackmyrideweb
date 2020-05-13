const bikeModel = require("../models/Bike.js");
const userModel = require("../models/User.js");

 module.exports = async (req, res) => {
  
    const id = req.session.userId;
 
    //  try {
         //Save the data
         await Promise.all([
            //Return the user object
            userModel.findById({_id: id}),
             //Find the bikes the user have
            bikeModel.findOne({userId: id})
        
          ]).then( (result) => {
            console.log( result[0] );
            console.log( result[1] );
            let userBikeDetails = result[1];
            let accountDetails = result[0];
       //     res.render("profile",  {userBikeDetails: userBikeDetails})
        
            res.render("profile",  {userBikeDetails: userBikeDetails, accountDetails: accountDetails})
              
          }).catch(err =>{
             console.log(err);
          });
         
         //Refresh the page 
      //   return res.redirect('/consultmap');
        // return res.send(result[1]);
         
        // } catch (err) {
            // console.log(req.status);
// }
   
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