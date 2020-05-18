//const mongoose = require('mongoose');
const bikeModel = require("../models/Bike.js");
const userModel = require("../models/User.js");
//const Profile = mongoose.model('Profile');
const Profile = require("../models/ProfileImage.js");
//const Bike = mongoose.model("Bike");
const path = require('path');

let userBikeDetails; //Assign bike object
let accountDetails; //Assign user object
let bikeCount;
let message;
let userId ;
const axios = require('axios');

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
             bikeCount = result[2];
             profilePic = result[3].url;
         
            //Display profile page and send both user and bike objects
            console.log(userId);
            console.log(profilePic);
            console.log(userBikeDetails);
            console.log(accountDetails);
            res.render("profile",  {userBikeDetails: userBikeDetails, accountDetails: accountDetails, bikeCount:bikeCount, userId:userId, profilePic: profilePic})
              
          }).catch(err =>{
             console.log(err);
          });
   
}

exports.updatePassword = async (req, res) => {
  
 const userId = req.params.id; //Logged user
//   const password = "test";
//const userId = req.session.userId;
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
      console.log(response.data.message);

    //  res.redirect(('/profile', {anyVar:true})); 
         // res.render("profile",  {userBikeDetails: userBikeDetails, accountDetails: accountDetails, userId:userId, message:message})
         req.flash('GOOD', 'Password updated', '/profile');
        // return	res.redirect("/profile");
  
	} catch (err) {
    console.log(err.message);
    req.flash('BAD', 'Something went wrong', '/profile');
	}
  
}

exports.updatePicture = async (req, res) => {

  let img = new Profile();
  img.userId = req.params.id;
  img.url = req.protocol + '://' + req.get('host') + '/uploads/' + req.params.id + path.extname(req.file.originalname);
  img.fieldname = `MyProfile-${req.params.id}`
  img.filename = `MyProfile-${req.params.id}`;
  img.originalName = req.file.originalname;
    
  try {
    await img.save();
    //res.status(201).send({ img });
    req.flash('GOOD', 'Password updated', '/profile');
  } catch (err) {
    return res.sendStatus(400);
  }
}

exports.image = async (req, res) => {
  const imageUrl = req.params.id + path.extname(file.originalname);
  console.log(imageUrl);
  res.send(imageUrl);
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