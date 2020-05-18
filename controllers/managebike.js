const axios = require('axios');

module.exports = async (req, res) => {
	const userId = req.session.userId;

	bike = [];

	registredBefore = true;

	try {
		const response = await axios({
			method: 'GET',
			url: `http://34.247.183.192:3000/getbikes/${userId}`,
			headers: { 'Content-Type': 'application/json' },
			data: {}
		});

		console.log(response);
		bike = response.data;
		console.log(bike);
		//Check if bike is returned
		if (bike === undefined || bike.length == 0) {
			//if bike is not defined

			return res.redirect('/registerbike');
		}

		res.render('managebike', {
			userId,
			bike,

			registredBefore: registredBefore
		});
	} catch (err) {
		console.log(err);
		res.redirect('/managebike');
	}
};
