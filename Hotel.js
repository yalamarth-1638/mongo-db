  const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  imageUrl: { type: String }, // URL to hotel image
});

module.exports = mongoose.model('Hotel', hotelSchema);
