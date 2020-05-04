const axios = require("axios");

module.exports = async (req, res) => {
 
  // Check the userId Logged
  console.log(req.session.userId);
  
  // Getting value from the form 
  let {serial, brand, color, type, status, locker, userId} = req.body;
  
  try {
    const response = await axios({
      method: "POST",
      url: "http://34.247.183.192:3000/registerbike",
      headers: { "Content-Type": "application/json" },
      data: {
        serial,
        userId: req.session.userId, 
        brand,
        color,
        type,
        status,
        locker
      },
    });
    console.log(response);
    console.log(req.session.userId);
    res.render("managebike");
    
  } catch (err) {
    console.log(err);
    res.redirect("/managebike");  
  }  
};
