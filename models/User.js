const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  //Mongoose validation before saving it to the Database.
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password1: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", function (next) {
  const user = this;

  bcrypt.hash(user.password1, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
