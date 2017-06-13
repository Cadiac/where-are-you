const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  id: Number,
  name: String,
  createdAt: Date,
  updatedAt: {
    type: Date,
    expires: 10
  },
  location: {
    lat: Number,
    lng: Number,
  },
});

LocationSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Location', LocationSchema);
