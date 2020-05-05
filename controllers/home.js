const HomePage = require("../models/User.js");

module.exports = async (req, res) => {
  const homepage = await HomePage.find({});
  console.log('I am home', req.session.userId);
  res.render("home", {
    homepage,
  });
};
