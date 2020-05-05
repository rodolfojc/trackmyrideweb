const axios = require("axios");

module.exports = async (req, res) => {
  const userId = req.session.userId;
  isfalse = 2;
  bike = [];

  try {
    const response = await axios({
      method: "GET",
      url: `http://34.247.183.192:3000/getbikes/${userId}`,
      headers: { "Content-Type": "application/json" },
      data: {},
    });
    console.log(response);
    bike.push(response.data);
    res.render("managebike", {
      userId,
      bike,
    });
    console.log(bike);

  } catch (err) {
    console.log(err);
    res.redirect("/managebike");  
  }    
};
