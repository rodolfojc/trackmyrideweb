  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  const NewRackSchema = new Schema({

    newRackId: String,  
    // loc: {
    //   type: { 
    //     type: String,
    //   default: "Point" },
    //   coordinates: [Number]
    // },
    latitude: String, //id newLat
    longitude: String, //id newLon
    type : String,
    quantity: Number,
    email: String, //id newEmail
    property: String,
    newDescription: String,

  });

  const newRack = mongoose.model("newRack", NewRackSchema);

  module.exports = newRack;


