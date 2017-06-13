const mongoose = require('mongoose');
const Location = mongoose.model('Location');

const fetchLocations = () => Location.find();

const updateLocation = (id, data) => {
  const { location, name } = data;
  const newLocation = new Location({
    id,
    name,
    location,
  });

  return newLocation.save();
}


module.exports = {
  fetchLocations,
  updateLocation,
};
