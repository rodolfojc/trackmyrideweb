const express = require("express");

const app = express();
//Path is a module to help us to get the directory path
const path = require("path");
//To be able to serve static files such CSS and fonts.
app.use(express.static("public"));

//Constant to use ESJ files
const ejs = require("ejs");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

app.get("/sign", (req, res) => {
  res.render("signin");
});

app.get("/about", (req, res) => {
  res.render("about");
});