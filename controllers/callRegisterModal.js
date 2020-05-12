const axios = require('axios');

module.exports = async (req, res) => {
	const userId = req.session.userId;
	isfalse = 1;
	bike = [];
	modal = 1; //turn off ModalMainScreen.

	registredBefore = false;

	try {
		const response = await axios({
			method: 'GET',
			url: `http://34.247.183.192:3000/getbikes/${userId}`,
			headers: { 'Content-Type': 'application/json' },
			data: {}
		});
		console.log(response);
		bike.push(response.data);
		res.render('welcomeScreen', {
			modal: modal,
			userId,
			bike,
			isfalse: isfalse,
			registredBefore: registredBefore
		});
		console.log(bike);
	} catch (err) {
		console.log(err);
		res.redirect('/managebike');
	}
};
