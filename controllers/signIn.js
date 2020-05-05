const SignInPage = require("../models/User.js");

module.exports = async (req, res) => {
 
  
  const signinpage = await SignInPage.find({});
  res.render("signIn2", {
    signinpage,
  });
};
