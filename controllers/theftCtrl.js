//DELETE IF NOT IN USE

const Theft = require('../models/Theft.js') //Accessing Schema

module.exports = async (req, res) => {

console.log("entry point")
    //Get id from front end
     const id = req.params.id;
    //  const rackId = "12345";
     //Find the data in the db, update with
     //new data, display update (new:true)
//    await Theft.findByIdAndUpdate({rackId : id},req.body, {new: true},err => {
    await Theft.findOneAndUpdate({rackId : id}, {$inc: { quantity: 1}},err => {
    console.log(id + " id ");
    //If not found, display error 500
    if (err) return res.send(500, err);
    //redirect to the main page
    // return res.redirect("/");
    return res.send("updated" + id)
});
}



//POST
// module.exports = async (req,res) =>{
//     //Get the new data from browser
//      const todoTask = new Theft(req.body);
          
//      try {
//          //Save the data
//          await todoTask.save();
//          console.log("saved");
//          //Refresh the page 
//         //  return res.redirect('/');
//         res.send(todoTask);
         
//         } catch (err) {
//     console.log(req.status);
// }
// }



// GET
// module.exports = async (req,res) =>{
//     //Find all entries in the DB
//     const activity = await Theft.find({})
    
//     //Display index.ejs page with DB entries
//     // res.render("index", { activity: activity});
//     console.log(activity);
//     res.send(activity);
// }


