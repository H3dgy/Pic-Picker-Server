const db = require("../db");

// Functionality coupled to images: Create Image, Vote on Image (View)

// Sequelize models
const User = db.models.User;

// Upload an image for a user
// Returns a promise
const addUser = (username, password, settings) => {
  return User.create({
    username: username,
    password: password,
    settings: settings,
    credits: 0
  });
};

const incrementCredit = (id) => {
  return User.increment('credits', {where: {id: id}})
}

const decrementCredit = (id) => {
  return User.decrement('credits', {where: {id: id}})
}

const findUserById = (id) => {
  return User.findOne({
    where: {
      id: id
    }
  });
}

const update = (id, obj) => {
  return User.update(obj, {
    where: {id: id}
  })
}

const findUserByUsername = (username) => {
  return User.findOne({
    where: {
      username: username
    }
  })
}

const findAll = () => {
  return User.findAll()
}

module.exports = {
  incrementCredit,
  decrementCredit,
  addUser,
  findUserById,
  findUserByUsername,
  findAll,
  update
};
