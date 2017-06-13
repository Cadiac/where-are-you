const Joi = require('joi');
const Boom = require('boom');

const locationService = require('../../services/locations');

module.exports.getLocations = {
  description: 'Get list of all locations',
  handler: (request, reply) => locationService.fetchLocations()
    .then(locations => reply(locations))
    .catch(err => reply(Boom.badImplementation('Fetching locations failed', err)))
};

module.exports.updateLocation = {
  description: 'Update current location',
  validate: {
    payload: {
      id: Joi.string(),
      location: Joi.object({
        lat: Joi.number().required(),
        lng: Joi.number().required(),
      }).required()
    },
  },
  handler(request, reply) {
    return locationService.updateLocation(request.payload.id, request.payload.location)
      .then(reply)
      .catch(err => {
        console.error('Error:', err);
        return reply(Boom.badImplementation('Could not update new location', err))
      });
  },
};
