const Joi = require('joi');
const Boom = require('boom');

const userService = require('../../services/users');

module.exports.register = {
  description: 'Assign unique ID to new customer with name',
  validate: {
    payload: {
      name: Joi.string().required(),
    },
  },
  handler: (request, reply) => userService.createUser(request.payload.name)
    .then(uuid => reply(uuid).status(201))
    .catch(err => reply(Boom.badImplementation('Could not register new user', err)))
};
