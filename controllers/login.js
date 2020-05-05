const LoginPage = require("../models/User.js");

module.exports = async (req, res) => {
  isFalse=2;
  const loginpage = await LoginPage.find({});
  res.render("login2", {
    loginpage,
    isFalse: isFalse
  });
};
