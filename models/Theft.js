const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TheftSchema = new Schema({
  rackId: {
      type: String, 
  },

  quantity: {
      type: Number,
      default: 0,
      },

 
    testField :{
        type: String, 
        default:"added by user"
    }

});


module.exports = mongoose.model('theft', TheftSchema, 'racks' );
