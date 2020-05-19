const UserModel = require('../models/User.js');

//Route to update bike.

module.exports = async (req, res) => {
	isfalse = 1;
	const user = await UserModel.find({});
	res.render('managebike', {
		isfalse: isfalse,
		user
	});
};
