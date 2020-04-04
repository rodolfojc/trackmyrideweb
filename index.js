const express = require("express");

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

//Connection with Mongo

mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });

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
  res.render("signin");
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});

//#############################################################################################//
app.post("/index/store", (req, res) => {
  console.log(req.body);

  //model creates a new doc with browser data
  UserCredentials.create(req.body, (error, blogspot) => {
    res.redirect("/");
  });
});

//########################################################/
//To save username inside the database
