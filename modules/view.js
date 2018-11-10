const db = require("../db");
const View = db.models.View;

const addView = (userId, username, userAge, userGender, uri) => {
  return View.create({
    userId: userId,
    username: username,
    userAge: userAge,
    userGender: userGender,
    userRanking: 10,
    imageId: uri
  })
}

const findViewsByUserId = (userId) => {
  return View.findAll({
    where: {
      userId: viewId
    }
  })
}

const findViewByViewId = (viewId) => {
  return View.findOne({
    where: {
      id: viewId
    }
  })
}

module.exports = {
  addView,
  findViewByViewId,
  findViewsByUserId
};
