const newRack = require("../models/Racks.js");
const Theft = require("../models/Theft.js");

//PASSING A CONSTANT RACKID FOR TEST

//Request to the server
module.exports = async (req,res) =>{
    //Get the new data from browser
    const newRackAdded = new newRack(req.body);
    const rack = new Theft({rackId : req.body.newRackId});
    // const rack = new Theft({rackId : req.body.newRackId}, {quantity: 0},  { testField: req.body.property});
     try {
         //Save the data
         await Promise.all([
            newRackAdded.save(), //add rack to the list
          
            // add new rack to the theft table
           rack.save(function (err, rc) { 
            if (err) return console.error(err);
            console.log(rc.rackId + " saved to theft collection.");
                   })
          ]).then( () => {

            console.log( "Redirecting to Consult Map page" );
            return res.redirect('/consultmap');
            // res.render("map", {newRackAdded:racks});

          });
            
              
        } catch (err) {
            console.log(req.status);
}
      
}

// CODE BELOW IFOR ONLY ONE MONGOOSE TRANSACTION
// module.exports = async (req,res) =>{
//     //Get the new data from browser
//      const newIncident = new newRack(req.body);
          
//      try {
//          //Save the data
//          await newIncident.save();
//          console.log(req.body);
//          console.log("saved");
//          //Refresh the page 
//          return res.redirect('/consultmap');
         
//         } catch (err) {
//             console.log(req.status);
// }
// }
