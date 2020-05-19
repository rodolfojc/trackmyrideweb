const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IncidentSchema = new Schema({

  rackId: String,  
  latitude: String,
  longitude: String,
  email: String,
  incident: String,
  date: String,
  time: String,
  description: String,
//   theft: [{
//     quantity: Number,
//   }
      
//   ],
});

const incident = mongoose.model("incidentNew", IncidentSchema);

module.exports = incident;


