// Route to update bike details.
const axios = require('axios');
exports.bikeUpdate = async (req, res) => {
	const userId = req.session.userId; //Logged user
	console.log('CLICOU');

	let image = req.file;
	// Getting value from the form
	let { serial, brand, color, type, status, locker } = req.body;
	console.log(req.body);
	updatedbike = [];

	try {
		const response = await axios({
			method: 'POST',
			url: 'http://34.247.183.192:3000/updateBike',
			headers: {},
			data: {
				serial,
				brand,
				color,
				type,
				status,
				locker,
				userId
			}
		});
        console.log("CLICLOU!");
		console.log(response);
		updatedbike = response.data;
		const successMessage = response.data.message;

		res.render('managebike', { userId, updatedbike, successMessage, bike: updatedbike });
	} catch (err) {
		console.log(err.message);
	}
};
