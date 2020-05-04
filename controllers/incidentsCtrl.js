const incident = require("../models/Incidents.js");
const Theft = require("../models/Theft.js");


//Request to the server
module.exports = async (req,res) =>{
    console.log(req.session.userId);
    //Get the new data from browser
     const newIncident = new incident(req.body);
     const rack = newIncident.rackId;
     try {
         //Save the data
         await Promise.all([
            newIncident.save(), //add incident to the list
            // Increment one incident on the rack
            Theft.findOneAndUpdate({rackId : rack}, {$inc: { quantity: 1}}, {new: true })
          ]).then( () => {
            console.log( rack );
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
