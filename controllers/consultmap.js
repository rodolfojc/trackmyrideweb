
module.exports = async (req, res) => {
  const userId = req.session.userId;
  console.log(userId);
  res.render("map", { userId });
};
