const incident = require("../models/Incidents.js");
const Theft = require("../models/Theft.js");
const racksModel = require("../models/Theft.js");


//Request to the server
module.exports = async (req,res) =>{
    console.log("User id session " + req.session.userId);
    //Get the new data from browser
     const newIncident = new incident(req.body);
     const rack = newIncident.rackId;
     try {
         //Save the data
         await Promise.all([
            newIncident.save(), //add incident to the list
            // Increment one incident on the rack
            racksModel.findOneAndUpdate({rackId : rack}, {$inc: { quantity: 1}}, {new: true })
          //  Theft.findOneAndUpdate({rackId : rack}, {$inc: { quantity: 1}}, {new: true })
          ]).then( () => {
            console.log( "This is the rackId" +rack );
          });
         
         //Refresh the page 
         return res.redirect('/consultmap');
        // return res.send(theft.req.body);
         
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
