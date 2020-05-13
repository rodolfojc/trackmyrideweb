const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = require("../models/User.js");

const Img = require('./Image.js');


const BikeSchema = new Schema({
	// serial: String,
	userId: {type: mongoose.Schema.Types.ObjectId, ref:userModel },
	serial: Number, //The db is number, here was String - Jady
	brand: String,
	color: String,
	type: String,
	status: String,
	lock: String,
	image: [
		{
			Img
		}],
	report: [
		{
			type: String,
			default:''
		}
	]
});

const Bike = mongoose.model('bikes', BikeSchema);

module.exports = Bike;
