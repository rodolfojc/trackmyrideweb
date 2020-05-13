const mongoose = require('mongoose');

const imagesSchema = new mongoose.Schema({
    bikeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bike'
    },
    data: Buffer, contentType: String
});

mongoose.model('Images', imagesSchema);