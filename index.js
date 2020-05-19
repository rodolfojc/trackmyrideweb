const dotenv = require('dotenv').config(); //To load environment variables 
const express = require('express'); //Express middleware
const axios = require('axios'); //handle http  requests
const expressSession = require('express-session'); //Create the session
const flash = require('express-flash-notification'); //Handle server response and display it to the user
const multer = require('multer');// file property to the req object so uploaded files are accessible.
const path = require('path'); //Path is a module to help us to get the directory path...
const ejs = require('ejs'); // Constant to receive EJS module ( To install server side)
const mongoose = require('mongoose'); //communicate with the Mongo Server (Install Server Side)
const bodyParser = require('body-parser'); //parses incoming request bodies in a middleware and make the form data available under req.body property.
const app = express(); //create the express application


app.use(bodyParser.json({ limit: '10kb' })); //to use the body portion of request to json
app.use(bodyParser.urlencoded({ extended: true })); //parsing the incoming body request 
app.use(express.static('views')); //serving static files
app.set('view engine', 'ejs'); //Template engine for html files

//Creating a customer middleware
const validateMiddleWare = (req, res, next) => {
	if (req.email == null || req.password == null) {
		return res.redirect('/sigIn2');
	}
	next();
};
app.use('/index/store', validateMiddleWare);

//Creating an express session
app.use(expressSession({
		secret: 'TrackMyRide',
		resave: true,
		saveUninitialized: true
	})
);

//Mongoose connection using environment variables
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });

//Routing imports##################################################################

const homeController = require('./controllers/login');

const signinController = require('./controllers/signIn');

//  const welcomeController = require('./controllers/home');

const manageBikeController = require('./controllers/managebike');

const consultMapController = require('./controllers/consultmap');

const bikeInfoController = require('./controllers/bikeinfo');

const reportFormController = require('./controllers/reportform');

const consultPageController = require('./controllers/consult');

const newUserController = require('./controllers/newUser');

const welcomeScreenController = require('./controllers/welcomeScreen');

const incidentsController = require('./controllers/incidentsCtrl');

const addbikeController = require('./controllers/addbike');

//const theftController = require('./controllers/theftCtrl'); //DELETE IF NOT IN USE

const newRackController = require('./controllers/newRackCtrl');

// const updateController = require('./controllers/updateBike');

const searchBikesController = require('./controllers/searchBikesCtrl');

const reportBikeInfoController = require('./controllers/reportBikeInfoCtrl');

const callModalController = require('./controllers/callModal');

const callRegisterController = require('./controllers/callRegisterModal');

const callWelcomeScreen2Controller = require('./controllers/welcomeScreen2');

const profileController = require('./controllers/profileCtrl');

const accountController = require('./controllers/accountCtrl');

const bikeUpdateController = require('./controllers/bikeUpdateCtrl');

//const bikeImageController = require('./controllers/bikeImageCtrl');

//###################################################################################


//Flash notifications to render server messages to front end, based on :
//https://github.com/carlosascari/express-flash-notification-example/blob/master/server.js
const flashNotificationOptions = {
	beforeSingleRender: function(item, callback) {
	  if (item.type) {
		switch(item.type) {
			//Positive Message
		  case 'GOOD':
			item.type = 'Success';
			item.alertClass = 'alert-success';
			break;
			//Warning message
		  case 'OK':
			item.type = 'Info';
			item.alertClass = 'alert-info';
			break;
			//Error message
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

//Creating a local directory to store the pictures
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, '/home/ec2-user/trackmyrideweb/views/uploads'); //cloud address
	},

	filename: function(req, file, cb) {
		cb(null, req.params.id + path.extname(file.originalname));
	}
});

var upload = multer({ storage: storage });

//Local port for the application
app.listen(3005, () => {
	console.log('App listening on port 3005');
});

//Routes for all pages #####################################################################

app.get('/', homeController); //Main route

app.get('/sign', signinController); //Sign Up Controller

app.get('/managebike', manageBikeController.loadBike); //Direct user to manage its bikes

app.get('/consultmap', consultMapController); //Display the map

app.get('/bikeinfo', bikeInfoController); //Display form to user input a serial number

app.get('/consult', consultPageController); //Redirect user to Consult Map or Consult a bike serial

app.get('/welcomescreen', welcomeScreenController); //Main menu

app.get('/welcomescreen2', callWelcomeScreen2Controller);//Main menu with no object

app.post('/incident', incidentsController); //New incident to the map

app.post('/addBike', upload.single('myImages'), addbikeController); //Register a new Bike

app.post('/searchBikes', searchBikesController); //Find bike by serial number

app.post('/addNewRack', newRackController); //New rack reported

// app.get('/update', updateController); // to call the modal in ManageBike Screen.

app.post('/reportBikeInfo/:id', reportBikeInfoController); //User report suspicious activity  with that bike

app.get('/callmodal', callModalController); //to call Modal in Main Screen to access Managebike options.

app.get('/registerbike', callRegisterController); // to call Modal to register a bike.

app.get('/profile', profileController.loadProfile); //Open user profile page

app.post('/updatepassword/:id', profileController.updatePassword); //Update a password

app.post('/addPicture/:id', upload.single('MyImage'), profileController.updatePicture); //Upload a profile picture

app.post('/deleteaccount/:id', accountController); //Delete an account from the user profile page

app.post('/addbikepicture/:id', upload.single('MyImage'), manageBikeController.updatePicture); //Upload new bike picture

app.post('/updateBikeInfo/:id', manageBikeController.updateBike); //Update bike details

//Sign up route form
app.post('/signin', async (req, res) => {

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
		res.redirect('/'); //Redirect to the main page instead to login
	} catch (err) {
     		console.log(err.message);
			 res.redirect('/');
	}

});

//Sign in route
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
		res.render('login2', { errors: 'Invalid email or password' });
	}
});

