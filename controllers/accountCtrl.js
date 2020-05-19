// DELETE USER ACCOUNT FROM USER PROFILE.
//ALSO DELETE ALL THE BIKES THAT USER HAVE IN THE SYSTEM

const userModel = require("../models/User.js");
const bikeModel = require("../models/Bike.js");

module.exports = async (req, res) => {
   const id = req.params.id // ID


   await Promise.all([ //Execute both queries
      //Return the user object
      userModel.findByIdAndDelete({_id: id}),
       //Find the bikes the user have and return the object
      bikeModel.remove({userId: id})
    ]).then( () => {
      console.log("deleted");
      
      req.session.destroy((err) => {
                  res.redirect('/') // will always fire after session is destroyed
                })
               
    }).catch(err =>{
       console.log(err);
    });
}