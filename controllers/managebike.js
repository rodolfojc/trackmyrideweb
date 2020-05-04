module.exports = async (req, res) => {
  const userId = req.session.userId;
  res.render("managebike", {userId} );
};
