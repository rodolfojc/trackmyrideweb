const mongoose = require('mongoose');

const bikePicture = new mongoose.Schema({
    bikeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bike'
    },
    filename: String,
    fieldname: String,
    originalName: String,
    url: String,
    created: Date
});

const bikePic = mongoose.model('Image', bikePicture);

module.exports = bikePic;