const express = require("express");

const app = express();
//Path is a module to help us to get the directory path
const path = require("path");
//To be able to serve static files such CSS and fonts.



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
