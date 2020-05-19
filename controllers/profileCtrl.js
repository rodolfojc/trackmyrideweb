// Used por profile and account details
const bikeModel = require("../models/Bike.js");
const userModel = require("../models/User.js");
const Profile = require("../models/ProfileImage.js");
//const path = require('path');

let userBikeDetails; //Assign bike object
let accountDetails; //Assign user object
let bikeCount; //Bikes a user have
let message; 
let userId ;
//const axios = require('axios');

 exports.loadProfile = async (req, res) => {
  
    userId = req.session.userId; //Logged user
         
         await Promise.all([ //Execute both queries
            //Return the user object
            userModel.findById({_id: userId}),
             //Find the bikes the user have and return the object
            bikeModel.findOne({userId: userId}),
            //count the number of bikes an user have
            bikeModel.countDocuments({userId: userId}),
            //Upload Profile picture
            Profile.findOne({userId: userId})
          ]).then( (result) => {
            accountDetails = result[0];    //Assign user object
             userBikeDetails = result[1]; //Assign bikes object
             bikeCount = result[2]; //Bikes the user have
             profilePic = result[3]; //profile picture
         
            //Display profile page and send both user and bike objects
            console.log(userId);
            console.log(profilePic);
            console.log(userBikeDetails);
            console.log(profilePic);
            res.render("profile",  {userBikeDetails: userBikeDetails, accountDetails: accountDetails, bikeCount:bikeCount, userId:userId, profilePic: profilePic})
              
          }).catch(err =>{
             console.log(err);
          });
   
}

//Route to update user password
exports.updatePassword = async (req, res) => {
  
 const userId = req.params.id; //Logged user
 const password = req.body.updatedPass;
   
   console.log("From the update user: " +userId +" pass:" + password);
   
   try {
		const response = await axios({
			method: 'POST',
			url: `http://34.247.183.192:3000/updatepassword/${userId}`,
			headers: {},
			data: {			
				password
			}
      });
      message = response.data.message;
        req.flash('GOOD', 'Password updated', '/profile');
      
  
	} catch (err) {
    console.log(err.message);
    req.flash('BAD', 'Something went wrong', '/profile');
	}
  
}

//Update user profile picture
exports.updatePicture = async (req, res) => {

  let img = new Profile();
  img.userId = req.params.id;
  img.url = req.protocol + '://' + req.get('host') + '/uploads/' + req.params.id + path.extname(req.file.originalname);
  img.fieldname = `MyProfile-${req.params.id}`
  img.filename = `MyProfile-${req.params.id}`;
  img.originalName = req.file.originalname;
    
  try {
    await img.save();
    req.flash('GOOD', 'Profile picture updated', '/profile');

  } catch (err) {
    req.flash('BAD', 'Something went wrong', '/');
    return res.sendStatus(400);

  }
}

