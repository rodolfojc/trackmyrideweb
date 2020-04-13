const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
  serial: String,
  brand: String,
  color: String,
  type: String,
  status: String,
  lock: String,
});

const Bike = mongoose.model("Bikes", BikeSchema);

module.exports = Bike;
