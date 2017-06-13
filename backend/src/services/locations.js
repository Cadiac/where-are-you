const mongoose = require('mongoose');
const Location = mongoose.model('Location');
const User = mongoose.model('User');

const fetchLocations = () => Location.find();

const updateLocation = (id, location) =>
  User.findOne({ id }, 'name')
    .then(user => {
      const { name } = user;

      // TODO: createdAt / updatedAt
      const newLocation = {
        id,
        name,
        location,
      };

      return Location.findOneAndUpdate(
        { id },
        newLocation,
        { upsert : true }
      );
    });



module.exports = {
  fetchLocations,
  updateLocation,
};
