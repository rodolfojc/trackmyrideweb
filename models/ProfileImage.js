const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User'
    },
    data: Buffer, contentType: String
});

const newImage = mongoose.model("Profile", profileSchema);

module.exports = newImage;