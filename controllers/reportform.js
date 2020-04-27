const ReportFormPage = require("../models/User.js");

// module.exports = async (req, res) => {
//   const reportFormPage = await ReportFormPage.find({});
//   res.render("reportForm", {
//     reportFormPage,
//   });
// };

module.exports = async (req, res) => {
  const reportFormPage = await ReportFormPage.find({});
  res.render("reportForm", {
    reportFormPage,
  });
};
