const mongoose = require('mongoose');
const User = mongoose.model('User');

const uuid = require('uuid');

const createUser = (name) => {
  const id = uuid.v4();
  const user = new User({
    id,
    name,
  });

  return user.save()
    .then(user => user.id);
}


module.exports = {
  createUser,
};
