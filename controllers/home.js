const HomePage = require("../models/User.js");

module.exports = async (req, res) => {
  const homepage = await HomePage.find({});
  res.render("home", {
    homepage,
  });
};
