const db = require("../db");

// Functionality coupled to images: Create Image, Vote on Image (View)

// Sequelize models
const Op = db.sequelize.Op;
const Image = db.models.Image;
const View = db.models.View;
const User = db.models.User;

// Upload an image for a user
// Returns a promise
// works
const addUser = (username, password, settings) => {
  return User.create({
    username: username,
    password: password,
    settings: settings,
    credits: 0
  });
};

// works
const incrementCredit = (userId) => {
  return User.increment('credits', {where: {id: userId}})
}

// works
const decrementCredit = (userId) => {
  return User.decrement('credits', {where: {id: userId}})
}

// Works
const findUserById = (userId) => {
  return User.findOne({
    where: {
      id: userId
    }
  });
}

// Works
const update = (userId, obj) => {
  return User.update(obj, {
    where: {id: userId}
  })
}

// Works
const findUserByUsername = (username) => {
  return User.findOne({
    where: {
      username: username
    }
  })
}

// Works
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
