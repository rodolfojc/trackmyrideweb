//Route to Welcome Screen
// It is passing a variable isfalse to trigger the modal to show.

module.exports = (req, res) => {
	isfalse = 2;
	const welcomePage = res.render('welcomescreen', { isfalse: isfalse });
};
