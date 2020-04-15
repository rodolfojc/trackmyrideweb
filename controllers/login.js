const LoginPage = require("../models/User.js");

module.exports = async (req, res) => {
  const loginpage = await LoginPage.find({});
  res.render("login2", {
    loginpage,
  });
};
