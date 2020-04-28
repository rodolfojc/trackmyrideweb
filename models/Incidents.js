const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IncidentSchema = new Schema({
  rackId:String,  
  latitude: 
      String
      ,
  longitude: String,
//   rackID: String,
  user: String,
  incident: String,
  date: String,
  time: String,
  description: String,
});

const incident = mongoose.model("Incident", IncidentSchema);

module.exports = incident;


