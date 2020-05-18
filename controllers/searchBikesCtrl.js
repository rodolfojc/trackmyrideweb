const bikeModel = require('../models/Bike.js');

module.exports = async (req, res) => {
	const userId = req.session.userId;
	const id = req.body.serial;
	//  const bikeInfoPage = await bikeModel.find({});
	try {
		const bikeInfoPage = await bikeModel.findOne({ serial: id });
		if (!bikeInfoPage) {
			// If there is no document
			throw new Error('no document found');
		}
		// If success
		res.render('bikeResults', { bikeInfoPage: bikeInfoPage, userId: userId });
		return bikeInfoPage;
	} catch (error) {
		// If error;
		console.log(`findOne error--> ${error}`);
		res.render('bikeinfo', { error: true, userId: userId });

		return error;
	}

	//res.render("bikeResults",  {bikeInfoPage});
	//console.log(bikeInfoPage);
	//console.log(typeof bikeInfoPage);
	//res.render("bikeResults",  {bikeInfoPage});
	// res.render("bikeResults",  {bikeInfoPage: bikeInfoPage});
};
