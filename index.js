const express = require("express");

const axios = require("axios");
const GeoJSON = require("geojson");

const app = express();
//Path is a module to help us to get the directory path...
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

//Importing Bike model
const Bike = require("./models/Bike.js");

//Routing imports##################################################################

const homeController = require("./controllers/login");

const signinController = require("./controllers/signIn");

const welcomeController = require("./controllers/home");

const manageBikeController = require("./controllers/managebike");

const consultMapController = require("./controllers/consultmap");

const bikeInfoController = require("./controllers/bikeinfo");

const reportFormController = require("./controllers/reportform");

const consultPageController = require("./controllers/consult");

//###################################################################################

//Creating a customer middleware
// const validateMiddleWare = (req, res, next) => {
// if (req.email == null || req.password == null) {
// return res.redirect("/sigIn2");
// }
// next();
// };
//
// app.use("/index/store", validateMiddleWare);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://admin:Pass1234!@cluster0-ii2az.mongodb.net/trackMyRide",
  { useNewUrlParser: true }
);

app.set("view engine", "ejs");

app.use(express.static("public"));

// app.get("/", (req, res) => {
// res.render("index");
// });

app.listen(3005, () => {
  console.log("App listening on port 3005");
});

//Routes for all pages #####################################################################

app.get("/sign", signinController);

app.get("/home", welcomeController);

app.get("/managebike", manageBikeController);

app.get("/consultmap", consultMapController);

app.get("/", homeController);

app.get("/bikeinfo", bikeInfoController);

app.get("/reportForm", reportFormController);

app.get("/consult", consultPageController);

// Finish Routes#############################################################################

// app.post("/index/store", async (req, res) => {
// console.log(req.body);
//
// Axios
// const { email, password } = req.body;
// console.log(req.body);
//
// try {
// const response = await axios({
// method: "post",
// url: "http://34.247.183.192:3000/signup",
// headers: {},
// data: {
// email,
// password,
// },
// });
// console.log(response);
// } catch (err) {
// console.log(err.message);
// }

//
// model creates a new doc with browser data
// UserCredentials.create(req.body, (error, blogspot) => {
// res.redirect("/");
// });
//
// res.sendFile(path.resolve(__dirname, "public/pages/signin2.html"));
//
// after sign in, save token
// res.render("home");
// });

// app.get("/about", (req, res) => {
// res.sendFile(path.resolve(__dirname, "about.html"));
// });

//#############################################################################################//
app.post("/index/store", async (req, res) => {
  console.log(req.body);

  // Axios
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const response = await axios({
      method: "POST",
      url: "http://34.247.183.192:3000/signup",
      headers: {},
      data: {
        email,
        password,
      },
    });
    res.status(200).render(welcomeController);    
    
  } catch (err) {
    console.log(err.message);  
  } 

  //model creates a new doc with browser data
  // UserCredentials.create(req.body, (error, blogspot) => {
  //   res.redirect("/");
  
});

app.post('/login', async (req, res) => {
  // Axios
  const { email, password } = req.body;
  console.log(req.body);
  
  try {
    const response = await axios({
      method: "POST",
      url: "http://34.247.183.192:3000/signin",
      headers: {"Content-Type": "application/json"},
      data: {
        email,
        password,
      },
    });    
    res.render('home', {token: response.token}); 
    
  } catch (err) {
    //alert(response);
    res.render('login2', {errors: 'Invalid email or password'});   
  } 

});

//########################################################/
//To save username inside the database
