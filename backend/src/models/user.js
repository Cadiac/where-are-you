const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: String,
  name: String,
  createdAt: Date,
  updatedAt: Date,
});

UserSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('User', UserSchema);
