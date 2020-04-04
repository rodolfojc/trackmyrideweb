const mongoose = require("mongoose");
//Importing the User model.UserCredential represents the User Credentials collection in the database.
const UserCredential = require("./models/User");

//Connecftion with the database.If my_database does not exist, it will be generated.
mongoose.connect("mongodb://localhost/my_database", {
  useUnifiedTopology: true
});

//Creating a new UserCredential document with a function called create().
// This function is taking as arguments first the Data regards to a new user.
//Second argument is taking a callback function when Create finishs.
//It also returns the newest create user credential as an argument for the callback function.
// UserCredential.create(
// {
// email: "jadysilva@gmail.com",
// password: "jadysilva!"
// },
// (error, UserCredential) => {
// console.log(error, UserCredential);
// }
// );

//########################CRUD FUNCTIONALITIES################################################

// To find a User by its email

// UserCredential.find(
// { email: "jadysilva@gmail.com" },
// (error, UserCredential) => {
// console.log(error, UserCredential);
// }
// );

//#############################################################################################
// To find an item by its ID.

var id = "5e872491ea20ac47b46d021b";
UserCredential.findById(id, (error, UserCredential) => {
  console.log(error, UserCredential);
});

//#############################################################################################

// Updating Records

// var id = "5e872491ea20ac47b46d021b";
// UserCredential.findByIdAndUpdate(
// id,
// {
// email: "update"
// },
// (error, UserCredential) => {
// console.log(error, UserCredential);
// }
// );
//######################################################################################

//Deleting Single Record

var id = "5e872491ea20ac47b46d021b";

UserCredential.findByIdAndDelete(id, (error, UserCredential) => {
  console.log(error, UserCredential);
});

//########################################################################################
