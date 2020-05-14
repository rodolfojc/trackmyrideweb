const bikeModel = require("../models/Bike.js");
const userModel = require("../models/User.js");
const axios = require('axios');

 exports.loadProfile = async (req, res) => {
  
    const userId = req.session.userId; //Logged user
         
         await Promise.all([ //Execute both queries
            //Return the user object
            userModel.findById({_id: userId}),
             //Find the bikes the user have and return the object
            bikeModel.findOne({userId: userId})
          ]).then( (result) => {
            let userBikeDetails = result[1]; //Assign user object
            let accountDetails = result[0]; //Assign bikes object
            //Display profile page and send both user and bike objects
            console.log(userId);
            console.log(userBikeDetails);
            console.log(accountDetails);
            res.render("profile",  {userBikeDetails: userBikeDetails, accountDetails: accountDetails, userId:userId})
              
          }).catch(err =>{
             console.log(err);
          });
   
}

exports.updatePassword = async (req, res) => {
   console.log("Route ok");
  
  // const userId = req.params.id; //Logged user
//   const password = "test";
const userId = req.session.userId;
 const password = req.body.updatedPass;
   
   console.log("From the update user: " +userId +" pass:" + password);
   
   try {
		const response = await axios({
			method: 'POST',
			url: 'http://34.247.183.192:3000/updatepassword',
			headers: {},
			data: {
				userId,
				password
			}
      });
         
      res.send(userId);
      
		//res.render('profile', { userId });
	} catch (err) {
		console.log(err.message);
	}
  
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