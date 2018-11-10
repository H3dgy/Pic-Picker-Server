const db = require("../db");

// Functionality coupled to images: Create Image, Vote on Image (View)

// Sequelize models
const Op = db.sequelize.Op;
const Image = db.models.Image;
const View = db.models.View;

// Upload an image for a user
// Returns a promise
const imageUpload = (userId, uri) => {
  return Image.create({
    uri: uri,
    priority: 1,
    userId: userId
  });
};

// Find images for a user
// lastDate specifies which the last update picture is that he has seen to not see same picture twice
// ensure lastDate is the right date object
// Higher up the lastDate needs to be send to the client of the new object

const imageStream = (userId, lastDate, priority) => {
  return Image.findAll({
    where: {
      createdAt: {
        [Op.gt]: lastDate
      },
      priority: priority,
      include: [
        {
          model: View,
          where: {
            [Op.not]: {
              userId: userId
            }
          }
        }
      ]
    }
  });
};

// Find all images from user 
// returns promise

const userImages = (userId) => {
  return Image.findAll({
    where: {
      userId: userId
    }
  })
}

// find image returns promise

const findImage = uri => {
  return Image.findOne({ where: { uri: uri } });
};

module.exports = {
  imageUpload,
  findImage,
  imageStream,
  userImages
};
