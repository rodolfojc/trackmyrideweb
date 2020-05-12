const axios = require('axios');
const Image = require('../models/Image.js');

module.exports = async (req, res) => {
	// Check the userId Logged
	console.log(req.session.userId);

	//Here you have the image to be added to the DB.
       let image = req.file;

	
	

	// Getting value from the form
	let { serial, brand, color, type, status, locker, userId} = req.body;

	try {
		const response = await axios({
			method: 'POST',
			url: 'http://34.247.183.192:3000/registerbike',
			headers: { 'Content-Type': 'application/json' },
			data: {
				serial,
				img: image, // The image is here in a JSON format type. You can check on the console.log(response);s
				userId: req.session.userId,
				brand,
				color,
				type,
				status,
				locker
			}
		});
		console.log(response);
		console.log(req.session.userId);
		res.render('managebike');
	} catch (err) {
		console.log(err);
		res.redirect('/managebike');
	}
};
