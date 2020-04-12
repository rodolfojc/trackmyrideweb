const express = require("express");
<<<<<<< HEAD
const axios = require("axios");
=======
const axios = require ('axios');
const GeoJSON = require('geojson');
>>>>>>> mongo-cloud

const app = express();
//Path is a module to help us to get the directory path
const path = require("path");
//To be able to serve static files such CSS and fonts.

// Constant to receive EJS module ( To install server side)
const ejs = require("ejs");
// Constant to require mongoose to be used and to communicate with the Mongo Server (Install Server Side)
const mongoose = require("mongoose");

//Body-Parse parses incoming request bodies in a middleware and make the form data available under req.body property.
const bodyParser = require("body-parser");

//Importing User model
const UserCredentials = require("./models/User.js");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://admin:Pass1234!@cluster0-ii2az.mongodb.net/trackMyRide",
  { useNewUrlParser: true }
);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});


app.listen(3000, () => {
  console.log("App listening on port 3000");
});

app.get("/sign", (req, res) => {
  //res.sendFile(path.resolve(__dirname, "public/pages/signin.html"));

  // after sign in, save token
  res.render("signin");
});

app.get("/managebike", (req, res) => {
  res.render("managebike");
});

app.get("/about", (req, res) => {
  res.render("about");
});

//#############################################################################################//
app.post("/index/store", async (req, res) => {
  console.log(req.body);

  // Axios
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const response = await axios({
      method: "post",
      url: "http://34.247.183.192:3000/signup",
      headers: {},
      data: {
        email,
        password,
      },
    });
    console.log(response);
  } catch (err) {
    console.log(err.message);
  }
  //

  //model creates a new doc with browser data
  UserCredentials.create(req.body, (error, blogspot) => {
    res.redirect("/");
  });
});

//########################################################/
//To save username inside the database

//to display the map for any kind of user
app.get("/consultmap", (req, res) => {
  res.render("map");
});



        