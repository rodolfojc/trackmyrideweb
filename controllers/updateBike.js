const UserModel = require('../models/User.js');

module.exports = async (req, res) => {
	isfalse = 1;
	
	const { serial, brand, color, type, status, locker } = req.body;
	let bikeId = req.params.id;

	try {
		const response = await axios({
			method: 'GET',
			url: `http://34.247.183.192:3000/updatebike/${bikeId}`,
			headers: { 'Content-Type': 'application/json' },
			data: {
				serial,
				brand,
				color,
				type,
				status,
				locker
			}
		});
		console.log(response.data.message);
		res.render('managebike', {
			isfalse: isfalse,			
		});
		
	} catch (err) {
		console.log(err);
		res.redirect('/managebike');
	}
};
