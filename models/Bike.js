const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
  // serial: String,
  serial: Number, //The db is number, here was String - Jady
  brand: String,
  color: String,
  type: String,
  status: String,
  lock: String,
  img:{ data: Buffer, contentType: String },

  
});

const Bike = mongoose.model("bikes", BikeSchema);

module.exports = Bike;
