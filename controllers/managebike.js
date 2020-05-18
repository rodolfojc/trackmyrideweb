const axios = require('axios');
const BikePicture = require('../models/BikeImage');

exports.loadBike = async (req, res) => {
	const userId = req.session.userId;
	isfalse = 2;
	bike = [];

	registredBefore = false;

	try {
		const response = await axios({
			method: 'GET',
			url: `http://34.247.183.192:3000/getbikes/${userId}`,
			headers: { 'Content-Type': 'application/json' },
			data: {}
		});
		console.log(response);
		bike = response.data;
		console.log('bike ===>' + bike);
		res.render('managebike', {
			userId,
			bike,
			isfalse: isfalse,
			registredBefore: registredBefore
		});
	} catch (err) {
		console.log(err);
		res.redirect('/managebike');
	}
};

exports.updatePicture = async (req, res) => {

	let img = new BikePicture();
	img.userId = req.params.id;
	//img.url = req.protocol + '://' + req.get('host') + '/uploads/' + req.params.id + path.extname(req.file.originalname);
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
