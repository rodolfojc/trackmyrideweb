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

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //parsing the incoming body request 
app.use(express.static('views')); //serving static files

app.set('view engine', 'ejs'); //Template engine for html files





//const GeoJSON = require('geojson'); CHECK FOR DELETION


//Importing User model
const UserCredentials = require('./models/User.js');

//Importing Bike model
const bikeModel = require('./models/Bike.js');
const ProfileImage = require('./models/ProfileImage');
const BikePicture = require('./models/BikeImage');

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

//const theftController = require('./controllers/theftCtrl'); //DELETE IF NOT IN USE

const newRackController = require('./controllers/newRackCtrl');

const updateController = require('./controllers/updateBike');

const searchBikesController = require('./controllers/searchBikesCtrl');

const reportBikeInfoController = require('./controllers/reportBikeInfoCtrl');

const callModalController = require('./controllers/callModal');

const callRegisterController = require('./controllers/callRegisterModal');

const callWelcomeScreen2Controller = require('./controllers/welcomeScreen2');

const profileController = require('./controllers/profileCtrl');

const accountController = require('./controllers/accountCtrl');

const bikeUpdateController = require('./controllers/bikeUpdateCtrl');

const bikeImageController = require('./controllers/bikeImageCtrl');

//###################################################################################

//Creating a customer middleware
const validateMiddleWare = (req, res, next) => {
	if (req.email == null || req.password == null) {
		return res.redirect('/sigIn2');
	}
	next();
};

app.use('/index/store', validateMiddleWare);
app.use(
	expressSession({
		secret: 'TrackMyRide',
		resave: true,
		saveUninitialized: true
	})
);

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
		cb(null, '/home/ec2-user/trackmyrideweb/views/uploads');
	},

	filename: function(req, file, cb) {
		cb(null, req.params.id + path.extname(file.originalname));
	}
});

var upload = multer({ storage: storage });




mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });




app.listen(3005, () => {
	console.log('App listening on port 3005');
});

//Routes for all pages #####################################################################

app.get('/sign', signinController);

app.get('/home', welcomeController);

app.get('/managebike', manageBikeController.loadBike);

app.get('/consultmap', consultMapController); //Display the map

app.get('/', homeController);

app.get('/bikeinfo', bikeInfoController); //Display form to user input a serial number

app.get('/reportForm', reportFormController); //IS IT IN USE???????

app.get('/consult', consultPageController); //Redirect user to Consult Map or Consult a bike serial

app.get('/welcomescreen', welcomeScreenController);

app.post('/incident', incidentsController); //New incident to the map

app.post('/addBike', upload.single('myImages'), addbikeController);

app.post('/searchBikes', searchBikesController);

//app.put('/incrementRack/:id', theftController); //DELETE IF NOT IN USE Testing the route to increment theft on a rack

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

app.post('/addbikepicture/:id', upload.single('MyImage'), manageBikeController.updatePicture);

app.post('/updateBikeInfo/:id', manageBikeController.updateBike);

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
		res.redirect('/'); //Redirect to the main page instead to login
		//res.render('welcomescreen', { userId: response.data.userId });
	} catch (err) {
	//	req.flash('BAD', 'Something went wrong. Try again and Keep riding  <i class="material-icons">', '/');
     		console.log(err.message);
			 res.redirect('/');
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

app.get('/gdpr', (req, res) => {
	res.render('gdpr');
});
