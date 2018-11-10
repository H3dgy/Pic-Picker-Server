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

const incrementCredit = (userId) => {
  return User.increment('credits', {where: {id: userId}})
}

const decrementCredit = (userId) => {
  return User.decrement('credits', {where: {id: userId}})
}

const findUserById = (userId) => {
  return User.findOne({
    where: {
      id: userId
    }
  });
}

const update = (userId, obj) => {
  return User.update(obj, {
    where: {id: userId}
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
