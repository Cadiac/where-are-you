const fetchLocations = () => Promise.resolve([
  {
    id: 1,
    location: {
      lat: 10,
      lng: 10,
    },
  },
  {
    id: 2,
    location: {
      lat: 10.1,
      lng: 10.1,
    }
  },
  {
    id: 3,
    location: {
      lat: 10.2,
      lng: 10.2,
    }
  }
]);

const updateLocation = (user, location) => Promise.resolve();

module.exports = {
  fetchLocations,
  updateLocation,
};
