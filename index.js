const dotenv = require('dotenv').config();
const express = require('express');


const axios = require('axios');
const GeoJSON = require('geojson');
const expressSession = require('express-session');
const flash = require('express-flash-notification');
//This adds the file property to the req object so uploaded files are accessible.
const multer = require('multer');

const app = express();
//Path is a module to help us to get the directory path...
const path = require('path');
//To be able to serve static files such CSS and fonts.

// Constant to receive EJS module ( To install server side)
const ejs = require('ejs');
// Constant to require mongoose to be used and to communicate with the Mongo Server (Install Server Side)
const mongoose = require('mongoose');

//Body-Parse parses incoming request bodies in a middleware and make the form data available under req.body property.
const bodyParser = require('body-parser');

//Importing User model
const UserCredentials = require('./models/User.js');

//Importing Bike model
const bikeModel = require('./models/Bike.js');
const ProfileImage = require('./models/ProfileImage');

//Routing imports##################################################################

const homeController = require('./controllers/login');

const signinController = require('./controllers/signIn');

const welcomeController = require('./controllers/home');

const manageBikeController = require('./controllers/managebike');

const consultMapController = require('./controllers/consultmap');

const bikeInfoController = require('./controllers/bikeinfo');

const reportFormController = require('./controllers/reportform');

const consultPageController = require('./controllers/consult');

const newUserController = require('./controllers/newUser');

const welcomeScreenController = require('./controllers/welcomeScreen');

const incidentsController = require('./controllers/incidentsCtrl');

const addbikeController = require('./controllers/addbike');

const theftController = require('./controllers/theftCtrl'); //DELETE IF NOT IN USE

const newRackController = require('./controllers/newRackCtrl');

const updateController = require('./controllers/updateBike');

const searchBikesController = require('./controllers/searchBikesCtrl');

const reportBikeInfoController = require('./controllers/reportBikeInfoCtrl');

const callModalController = require('./controllers/callModal');

const callRegisterController = require('./controllers/callregisterModal');

const callWelcomeScreen2Controller = require('./controllers/welcomeScreen2');

const profileController = require('./controllers/profileCtrl');

const accountController = require('./controllers/accountCtrl');

//###################################################################################

//Creating a customer middleware
const validateMiddleWare = (req, res, next) => {
	if (req.email == null || req.password == null) {
		return res.redirect('/sigIn2');
	}
	next();
};

app.use('/index/store', validateMiddleWare);

app.use(bodyParser.json());

//To enable photo upload
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	expressSession({
		secret: 'TrackMyRide',
		resave: true,
		saveUninitialized: true
	})
);

const flashNotificationOptions = {
	beforeSingleRender: function(item, callback) {
	  if (item.type) {
		switch(item.type) {
		  case 'GOOD':
			item.type = 'Success';
			item.alertClass = 'alert-success';
			break;
		  case 'OK':
			item.type = 'Info';
			item.alertClass = 'alert-info';
			break;
		  case 'BAD':
			item.type = 'Error';
			item.alertClass = 'alert-danger';
			break;
		}
	  }
	  callback(null, item);
	}
  };
  
  // Flash Notification Middleware Initialization
  app.use(flash(app, flashNotificationOptions));
/*
  app.get('/alert-1-good', function(req, res) {
	req.flash('GOOD', 'MESSAGE', '/profile');
  })
  
*/
//Creating a local directory to store the pictures
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'uploads');
	},

	filename: function(req, file, cb) {
		cb(null, req.params.id + path.extname(file.originalname));
	}
});

var upload = multer({ storage: storage });


app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });

app.set('view engine', 'ejs');

app.use(express.static('views'));

app.listen(3005, () => {
	console.log('App listening on port 3005');
});

//Routes for all pages #####################################################################

app.get('/sign', signinController);

app.get('/home', welcomeController);

app.get('/managebike', manageBikeController);

app.get('/consultmap', consultMapController); //Display the map

app.get('/', homeController);

app.get('/bikeinfo', bikeInfoController); //Display form to user input a serial number

app.get('/reportForm', reportFormController); //IS IT IN USE???????

app.get('/consult', consultPageController); //Redirect user to Consult Map or Consult a bike serial

app.get('/welcomescreen', welcomeScreenController);

app.post('/incident', incidentsController); //New incident to the map

app.post('/addBike', upload.single('myImages'), addbikeController);

app.post('/searchBikes', searchBikesController);

app.put('/incrementRack/:id', theftController); //DELETE IF NOT IN USE Testing the route to increment theft on a rack

app.post('/addNewRack', newRackController); //New rack

app.get('/update', updateController); // to call the modal in ManageBike Screen.

app.post('/reportBikeInfo/:id', reportBikeInfoController); //User report suspicious activity  with that bike

app.get('/callmodal', callModalController); //to call Modal in Main Screen to access Managebike options.

app.get('/registerbike', callRegisterController); // to call Modal to register a bike.

app.get('/welcomescreen2', callWelcomeScreen2Controller);

app.get('/profile', profileController.loadProfile); //Open user profile page

app.post('/deleteaccount/:id', accountController); //Delete an account from the user profile page

app.post('/updatepassword/:id', profileController.updatePassword);

app.post('/addPicture/:id', upload.single('MyImage'), profileController.updatePicture);

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
app.post('/signin', async (req, res) => {
	console.log('teste store: ' + req.body);

	// Axios
	const { email, password } = req.body;
	console.log(req.body);

	try {
		const response = await axios({
			method: 'POST',
			url: 'http://34.247.183.192:3000/signup',
			headers: {},
			data: {
				email,
				password
			}
		});
		console.log(response.data.userId);
		res.redirect("/");//Redirect to the main page instead to login
		//res.render('welcomescreen', { userId: response.data.userId });
	} catch (err) {
		console.log(err.message);
	}
});

app.post('/login', async (req, res) => {
	// Axios
	const { email, password } = req.body;
	console.log(req.body);
	modal = 2;
	isfalse = 2;
	registredBefore = false;

	try {
		const response = await axios({
			method: 'POST',
			url: 'http://34.247.183.192:3000/signin',
			headers: { 'Content-Type': 'application/json' },
			data: {
				email,
				password
			}
		});
		console.log(response);
		req.session.userId = response.data.userId;

		res.render('welcomescreen', {
			isfalse: isfalse,
			modal: modal,
			registredBefore: registredBefore,
			userId: response.data.userId
		});
	} catch (err) {
		//alert(response);
		res.render('login2', { errors: 'Invalid email or password' });
	}
});

//########################################################/
//To save username inside the database

// app.route("/put/id:").get((req, res) => {
//   var id = req.params.id;
//   console.log("Test to get ID ===>: " + id);

//   bikeModel
//     .findById(id, (err, bike) => {
//       console.log("Return from DB: ==> : " + bike);
//       var isfalse = 3;

//       res.render("managebike", {
//         bike: bike,
//         isfalse: isfalse,
//       });
//       console.log("Return from DB:==> " + bike);
//     })
//     .post((req, res) => {
//       var id = req.params.id;
//       console.log("UPDATE ID: ==> " + id);
//       console.log("What will be updated: ==> " + req.params);

//       bikeModel.findByIdAndUpdate(id, req.body, { new: true }, (err) => {
//         console.log(req.body);
//         if (err) return res.send(500, err);
//         return res.redirect("managebike");
//       });
//     });
// });

app.route('/put/:id').get((req, res) => {
	var id = req.params.id;

	bikeModel.findById(id, (err, bike) => {
		var isfalse = 1;

		res.render('managebike', {
			bike: bike,
			isfalse: isfalse
		});
	});
});
// })
// .post((req, res) => {
//   var id = req.params.id;
//   console.log("Id do UPDATE :" + id);
//   console.log("corpo do update" + req.params);

//   bikeModel.findByIdAndUpdate(id, req.body, { new: true }, (err) => {
//     console.log(req.body);
//     if (err) return res.send(500, err);
//     return res.redirect("welcomescreen");
//   });
// });
app.get('/gdpr', (req, res) => {
	res.render('gdpr');
});
