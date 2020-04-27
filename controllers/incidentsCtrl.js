const incident = require("../models/Incidents.js");

//Request to the server
module.exports = async (req,res) =>{
    //Get the new data from browser
     const newIncident = new incident(req.body);
          
     try {
         //Save the data
         await newIncident.save();
         console.log(req.body);
         console.log("saved");
         //Refresh the page 
         return res.redirect('/');
         
        } catch (err) {
            console.log(req.status);
}
}
