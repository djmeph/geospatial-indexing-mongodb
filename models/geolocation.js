const mongoose = require('mongoose');

const GeolocationSchema = new mongoose.Schema({
    coordinates: { type: [Number], index: '2d' },
    title: { type: String },
    description: { type: String }
});

module.exports = mongoose.model('Geolocation', GeolocationSchema);
