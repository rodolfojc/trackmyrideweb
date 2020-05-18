const axios = require('axios');
const Image = require('../models/Image.js');

exports.imageUploader = async (req, res) => {
	// Check the userId Logged
	console.log(req.session.userId);

	//Here you have the image to be added to the DB.
	img = req.file;
	try {
		const response = await axios({
			method: 'POST',
			url: `http://34.247.183.192:3000/upload/${req.params.id}`,
			headers: { 'Content-Type': 'application/json' },
			data: {
				img: img,
				bikeId: req.params.id
			}
		});
		console.log(response);
		bike = response.data;
		console.log(req.session.userId);
		console.log(successMessage);
		res.render('managebike', {
			bike,
			userId,
			successMessage,
			isFalse
		});
	} catch (err) {
		console.log(err);
		res.redirect('/managebike');
	}
};
