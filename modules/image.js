const db = require("../db");

// Functionality coupled to images: Create Image, Vote on Image (View)

// Sequelize models
const Op = db.sequelize.Op;
const Image = db.models.Image;
const View = db.models.View;

const initialData = {
  score: 5,
  people: 0,
  feedbackGender: {
    male: {
      upVotes: 0,
      people: 0
    },
    female: {
      upVotes: 0,
      people: 0
    }
  },
  feedbackAge: [{upVotes:0, people:0}, {upVotes:0, people:0}, {upVotes:0, people:0}, {upVotes:0, people:0}]
};

// Upload an image for a user
// Returns a promise

const imageUpload = async (userId, uri) => {
  const image = await Image.create({
    uri: uri,
    priority: 1,
    userId: userId,
    data: initialData
  });
  return image.get({plain: true})
};

const imageUpdate = (obj,imageId) => {
  return Image.update(obj, {
    where: { id: imageId }
  });
};

// Find images for a user
// lastDate specifies which the last update picture is that he has seen to not see same picture twice
// ensure lastDate is the right date object
// Higher up the lastDate needs to be send to the client of the new object

const imageStream = async (userId, lastImageId, priority) => {
  const result = await Image.findAll({
    where: {
      id: {
        [Op.gt]: lastImageId,
      },
      priority: priority,
      userId: {
        [Op.not]: userId
      }
    },
    include: [
      {
        model: View,
        where: {
          userId: {
            [Op.not]: userId
          }
        }
      }
    ]
  })
  return result.map(el => el.get({plain: true}));
};

// Find all images from user
// returns promise

const userImages = async userId => {
  const result = await Image.findAll({
    where: {
      userId: userId
    },
    include: [View],
  });
  return result.map(el => el.get({plain: true}));
};

// Find images and return view

const viewImages = () => {
  return Image.findAll({
    include: [View]
  });
};

// find image returns promise

const findImage = async imageId => {
  const result = await Image.findOne({
    where: { id: imageId },
    include: [View]
  });
  return result.get({plain: true});
};

// Find all images

const findAll = async () => {
  const result = await Image.findAll({
    include: [View]
  });
  return result.map(el => el.get({plain: true}));
};

// Increment / decrement priority

const incrementPriority = imageId => {
  return Image.increment("priority", { where: { id: imageId} });
};

// Decrement priority

const decrementPriority = imageId => {
  return Image.decrement("priority", { where: { id: imageId} });
};

module.exports = {
  imageUpload,
  findImage,
  imageUpdate,
  imageStream,
  userImages,
  findAll,
  viewImages,
  incrementPriority,
  decrementPriority
};
