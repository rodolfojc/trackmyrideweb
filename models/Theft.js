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

module.exports = mongoose.model('theft', TheftSchema, 'thefts' );
// theft = mongoose.model('theft', TheftSchema );

// module.exports = findOneAndUpdate({rackId : id}, {$inc: { quantity: 1}}, {new: true },function(err, response) {
//     if (err) {
//     callback(err);
//    } else {
//     callback(response);
//    }