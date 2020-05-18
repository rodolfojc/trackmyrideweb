const newRack = require("../models/Racks.js");
const racksModel = require("../models/Theft.js");


//Request to the server
module.exports = async (req,res) =>{
  //User ID
  const userId = req.session.userId;
    //Get the new data from form
    const newRackAdded = new newRack(req.body);
     //Get rack Id
         //const rackId = newRackAdded.rackId;
             const rack = new racksModel({rackId : req.body.newRackId});
  
    //  const rack = newIncident.rackId;
     try {
         //Save the data
         await Promise.all([
           //add incident to the list
           newRackAdded.save(),   
            // Increment one incident on the  theft field (quantity)
            rack.save(), //  Theft.findOneAndUpdate({rackId : rack}, {$inc: { quantity: 1}}, {new: true }) DELETE
          ]).then( () => {
            //TO BE ADDED - RETURN BACK A SUCCESS MESSAGE
            console.log( "This is the rack" +newRackAdded );
            
           //  res.render("map",  {userId: userId, rack:newRackAdded})
        //  res.render("map", {userId: userId});
        req.flash('GOOD', 'Password updated', '/consultmap');
      // res.render("/consultmap");
          });
         
                  
        } catch (err) {
            console.log(err);
        }
     
      
}





// const newRack = require("../models/Racks.js");
// const racksModel = require("../models/Theft.js");



// //Request to the server
// module.exports = async (req,res) =>{
//   const userId = req.session.userId; 
//     //Get the new data from browser
//     const newRackAdded = new newRack(req.body);
//     const rack = new racksModel({rackId : req.body.newRackId});
//     // const rack = new Theft({rackId : req.body.newRackId}, {quantity: 0},  { testField: req.body.property});
//      try {
//          //Save the data
//          await Promise.all([
//             newRackAdded.save(), //add rack to the list
          
//             // add new rack to the theft table
//            rack.save(function (err, rc) { 
//             if (err) return console.error(err);
//             console.log(rc.rackId + " saved to theft collection.");
//                    })
//           ]).then( () => {

      
//              console.log(rack);
//               // res.render("map", {newRackAdded:racks});
//              console.log( "Redirecting to Consult Map page" );
//              res.render("map", { userId: userId, newRackAdded:racks});
//            // res.redirect("/consultmap", { userId: userId});
//              //res.redirect('/consultmap');
             

//           });
            
      
//         } catch (err) {
//             console.log(req.status);
// }

// }

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
