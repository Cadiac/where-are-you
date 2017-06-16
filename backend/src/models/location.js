const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  id: String,
  name: String,
  updatedAt: {
    type: Date,
    expires: 10
  },
  location: {
    lat: Number,
    lng: Number,
  },
});

mongoose.model('Location', LocationSchema);
