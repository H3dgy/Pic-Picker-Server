const db = require("../db");
const Op = db.sequelize.Op;
const Image = db.models.Image;
const View = db.models.View;

const initialData = {
  score: 5,
  people: 0,
  feedbackGender: {
    male: {
      upVotes: 0,
      people: 0,
      summary: 0
    },
    female: {
      upVotes: 0,
      people: 0,
      summary: 0
    }
  },
  feedbackAge: [
    { upVotes: 0, people: 0, summary: 0 },
    { upVotes: 0, people: 0, summary: 0 },
    { upVotes: 0, people: 0, summary: 0 },
    { upVotes: 0, people: 0, summary: 0 }
  ]
};

const imageUpload = async (userId, uri) => {
  const image = await Image.create({
    uri: uri,
    priority: 1,
    userId: userId,
    data: initialData
  });
  return image.get({ plain: true });
};

const imageUpdate = (obj, imageId) => {
  return Image.update(obj, {
    where: { id: imageId }
  });
};

const imageStream = async (userId, lastImageId, priority) => {
  const result = await Image.findAll({
    where: {
      id: {
        [Op.gt]: lastImageId
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
  });
  return result.map(el => el.get({ plain: true }));
};

const userImages = async userId => {
  const result = await Image.findAll({
    where: {
      userId: userId
    },
    include: [View]
  });
  return result.map(el => el.get({ plain: true }));
};

const viewImages = () => {
  return Image.findAll({
    include: [View]
  });
};

const findImage = async imageId => {
  const result = await Image.findOne({
    where: { id: imageId },
    include: [View]
  });
  return result.get({ plain: true });
};

const findAll = async () => {
  const result = await Image.findAll({
    include: [View]
  });
  return result.map(el => el.get({ plain: true }));
};

const incrementPriority = imageId => {
  return Image.increment("priority", { where: { id: imageId } });
};

const decrementPriority = imageId => {
  return Image.decrement("priority", { where: { id: imageId } });
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
