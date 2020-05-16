/*
FROM REPORT AN INCIDENT
Connect to the Incidents and Theft Models
Add the form body to incidents Collection
Increase the theft field in Racks (Theft) Collection
*/

const incident = require("../models/Incidents.js");
//const Theft = require("../models/Theft.js"); DELETE
const racksModel = require("../models/Theft.js");


//Request to the server
module.exports = async (req,res) =>{
  //User ID
    console.log("User id session " + req.session.userId);
    //Get the new data from form
     const newIncident = new incident(req.body);
     //Get rack Id
     const rack = newIncident.rackId;
     try {
         //Save the data
         await Promise.all([
           //add incident to the list
            newIncident.save(), 
            // Increment one incident on the  theft field (quantity)
            racksModel.findOneAndUpdate({rackId : rack}, {$inc: { quantity: 1}}, {new: true })
          //  Theft.findOneAndUpdate({rackId : rack}, {$inc: { quantity: 1}}, {new: true }) DELETE
          ]).then( () => {
            //TO BE ADDED - RETURN BACK A SUCCESS MESSAGE
            console.log( "This is the rackId" +rack );
          });
         
         //Refresh the page 
         return res.redirect('/consultmap');
         
        } catch (err) {
            console.log(req.status);
}
      
}

// CODE BELOW IS WORKING
// module.exports = async (req,res) =>{
//     //Get the new data from browser
//      const newIncident = new incident(req.body);
          
//      try {
//          //Save the data
//          await newIncident.save();
//          console.log(req.body);
//          console.log("saved");
//          //Refresh the page 
//          return res.redirect('/');
         
//         } catch (err) {
//             console.log(req.status);
// }
// }
