const mongoose = require('mongoose');
const Location = mongoose.model('Location');
const User = mongoose.model('User');

const fields = 'name updatedAt location';

const fetchLocations = () => Location.find({}, fields);

const updateLocation = (user, location) => {
  const { name, id } = user;

  const newLocation = {
    id,
    name,
    location,
    updatedAt: Date.now(),
  };

  return Location.findOneAndUpdate(
    { id },
    newLocation,
    { upsert: true,
      new: true,
      fields,
    }
  );
};

module.exports = {
  fetchLocations,
  updateLocation,
};
