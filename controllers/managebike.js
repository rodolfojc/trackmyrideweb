//const ManageBikePage = require("../models/User.js");

module.exports = async (req, res) => {
  //const manageBikepage = await ManageBikePage.find({});
      const userId = req.session.userId;
      res.render("managebike", {userId} );
};
