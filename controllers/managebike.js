const ManageBikePage = require("../models/User.js");

module.exports = async (req, res) => {
  const manageBikepage = await ManageBikePage.find({});
  res.render("managebike", {
    manageBikepage,
  });
};
