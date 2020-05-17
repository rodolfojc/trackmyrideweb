const mongoose = require('mongoose');

const profileImgSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    filename: String,
    fieldname: String,
    originalName: String,
    url: String,
    created: Date
});

const newPic = mongoose.model('Profile', profileImgSchema);

module.exports = newPic;