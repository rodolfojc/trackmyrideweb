const axios = require('axios');
const BikePicture = require('../models/BikeImage');

    // Route to manage bike details.

    exports.loadBike = async (req, res) => {
	//getting the user Id
	const userId = req.session.userId;
    // declaring an array of bikes.
	bike = [];
    // variable to trigger one timme event.
	registredBefore = true;
    // varible to store bike image.
	bikeImg= [];
    // Try catch for request and response.
	try {

	//Sending request to the server and getting the response.
		const response = await axios({
			method: 'GET',
			url: `http://34.247.183.192:3000/getbikes/${userId}`,
			headers: { 'Content-Type': 'application/json' },
			data: {}
		});

		
     // Passing the bike data from response.
		bike = response.data;
		//Bike image array.
		bikeImg=[]
		
		//Check if bike is returned
		if (bike === undefined || bike.length == 0) {
			//if bike is not defined
             //If user does not have a bike, send the Modal to register first one.
			return res.redirect('/registerbike');
		}
    // Else user will be direct to Managebike page.
		res.render('managebike', {
			userId,
			bike,
			bikeImg:bikeImg,

			registredBefore: registredBefore
		});
	} catch (err) {
		console.log(err);
		res.redirect('/managebike');
	}
};
  // function to update bike details
exports.updatePicture = async (req, res) => {
	 //img.url = req.protocol + '://' + req.get('host') + '/uploads/' + req.params.id + path.extname(req.file.originalname);
	 //getting image schema
	 let img = new BikePicture();
	 // getting im id.
	 img.bikeId = req.params.id;
	 //getting image details.
	 img.fieldname = `BikePicture-${req.params.id}`
	 img.filename = `BikePicture-${req.params.id}`;
	 img.originalName = req.file.originalname;
	
	  
	try {
	  await img.save();
	  //res.status(201).send({ img });
	  req.flash('GOOD', 'Picture uploaded', '/managebike');
	} catch (err) {
	  return res.sendStatus(400);
	}
  }
    // Function to update bike details
    exports.updateBike = async (req, res) => {
    // getting bike id
	const bikeId = req.params.id;
	// getting body from the request
	const {serial, brand, color, type, status, lock} = req.body;

	try {
		const response = await axios({
			method: 'POST',
			url: `http://34.247.183.192:3000/updatebike/${bikeId}`,
			headers: { 'Content-Type': 'application/json' },
			data: {
				serial,
				brand,
				color,
				type,
				status,
				lock
			}
		});
		
		
		//get userId
		userId = req.params.id;

		//Check if bike is returned
		
		if (bike === undefined || bike.length == 0) {
			//if bike is not defined
			return res.redirect('/registerbike');
		}
		//Flash will direct screen and send a Success Message.
		req.flash('GOOD', 'Bike Updated!', '/managebike');
		
        // If catch error direct to managebike.
	}   catch (err) {
		console.log(err);
		res.redirect('/managebike');
	}


  }