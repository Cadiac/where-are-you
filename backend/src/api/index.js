const Locations = require('./routes/locations');

exports.register = (plugin, options, next) => {
  plugin.route([
    { method: 'PUT', path: '/locations/me', config: Locations.updateLocation },
    { method: 'GET', path: '/locations', config: Locations.getLocations },
  ]);

  next();
};

exports.register.attributes = {
  name: 'api',
};
