const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('../config/config');

const LocationSchema = new Schema({
  id: String,
  name: String,
  updatedAt: {
    type: Date,
    expires: config.locationExpirationTime,
  },
  location: {
    lat: Number,
    lng: Number,
  },
});

mongoose.model('Location', LocationSchema);
