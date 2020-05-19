// Route to get back to welcome screen page.

module.exports = (req, res) => {
	//It passes those objects to keep Modals hidden.
	modal = 2;
	isfalse = 2;
	registredBefore = false;
	const welcomePage = res.render('welcomescreen', {
		//It renders these Objects.
		modal: modal,
		isfalse: isfalse,
		registredBefore: registredBefore
	});
};
