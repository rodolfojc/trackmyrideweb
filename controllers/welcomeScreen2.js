module.exports = (req, res) => {
	modal = 2;
	isfalse = 2;
	registredBefore = false;
	const welcomePage = res.render('welcomescreen', {
		modal: modal,
		isfalse: isfalse,
		registredBefore: registredBefore
	});
};
