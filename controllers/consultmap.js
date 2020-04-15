const ConsultMapPage = require("../models/User.js");

module.exports = async (req, res) => {
  const mapPage = await ConsultMapPage.find({});
  res.render("map", {
    mapPage,
  });
};
