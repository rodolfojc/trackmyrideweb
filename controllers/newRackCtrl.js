const newRack = require("../models/Racks.js");
// const Theft = require("../models/Theft.js");

//PASSING A CONSTANT RACKID FOR TEST

//Request to the server
// module.exports = async (req,res) =>{
//     //Get the new data from browser
//      const rack = new newRack(req.body);
//     //  const rack = newIncident.rackId;
//      try {
//          //Save the data
//          await Promise.all([
//             newRack.save(), //add rack to the list
//             // add new rack to the theft table
//             // Theft.findOneAndUpdate({rackId : rack}, {$inc: { quantity: 1}}, {new: true })
//           ]).then( () => {
//             console.log( rack.req.body );
//           });
         
//         //  newIncident.save();
//         //  console.log(req.body);
//         //  console.log("saved");
//         //  Theft.findOneAndUpdate({rackId : "3333"}, {$inc: { quantity: 1}}, {new: true });
        
//          //Refresh the page 
//          return res.redirect('/consultmap');
//         // return res.send(theft.req.body);
         
//         } catch (err) {
//             console.log(req.status);
// }
      
// }

// CODE BELOW IFOR ONLY ONE MONGOOSE TRANSACTION
module.exports = async (req,res) =>{
    //Get the new data from browser
     const newIncident = new newRack(req.body);
          
     try {
         //Save the data
         await newIncident.save();
         console.log(req.body);
         console.log("saved");
         //Refresh the page 
         return res.redirect('/consultmap');
         
        } catch (err) {
            console.log(req.status);
}
}
