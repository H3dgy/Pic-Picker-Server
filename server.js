const express = require("express");
const db = require("./db");
const app = express();
const userModule = require("./modules/user");
const imageModule = require("./modules/image");
const { testImages, testUsers } = require("./testObjects");

// Sequelize models

const port = 3000;

// const _seedImages = () => {
//   Promise.all(
//     testImages.map(image => {
//       return imageModule.imageUpload(image.userId, image.uri);
//     })
//   );
// };



const seedUserCallback = async (req,res,next) => {
  await Promise.all(testUsers.map(user => {
    return userModule.addUser(user.username,user.password,user.settings);
  }))
  const result = await userModule.findAll();
  res.send(result);
}

app.get('/SeedUsers', seedUserCallback);

const IncrementCallback = async (req,res,next) => {
  await userModule.incrementCredit(2);
  await userModule.incrementCredit(2);
  await userModule.incrementCredit(3);
  await userModule.decrementCredit(2);
  const result = await userModule.findAll();
  res.send(result);
}

app.get('/Increment', IncrementCallback);

const findByIdCallback = async (req,res,next) => {
  
  const result = await userModule.findUserById(2);
  res.send(result);
}


app.get('/UserByID', findByIdCallback);

const findByNameCallback = async (req,res,next) => {
  const result = await userModule.findUserByUsername("Fred");
  res.send(result);
}
app.get('/UserByName', findByNameCallback);

const updateByIdCallback = async (req,res,next) => {
  const update = {
    settings: {
      gender: "both",
      age: 80,
      feedbackGender: { male: true, female: true },
      feedbackAge: [true, false, true, false]
    }
  } 
  await userModule.update(2,update);
  const feedback = await userModule.findUserById(2);
  res.send(feedback);
}
app.get('/Update', updateByIdCallback);


(async () => {
  try {
    await db.sync();
    // await _seedImages();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
})();

_seedUsers = () => {
  return 
}

// addUser = (username, password, settings)


// await db.sync()
// db.sync()
//   .then(()=> db.seed())
//   .then(() => console.log('synced and seeded'))
//   .catch(err => console.log(err));

// app.get('/addView', (req,res,next) => {
//   Image.findAll()
//   .then(images => {
//     return View.create({
//       userId: 1,
//       imageId: images[0].id
//     })
//   })
//   .then(view => {
//     return View.create({
//       userId:2,
//       imageId: view.imageId
//     })
//   })
//   .then(view => {
//     return Image.findAll({
//       include: [ View ]
//     })
//   })
//   .then( images => {
//     images.forEach(image => console.log(image.get().views))
//   })
// })

// app.get('/users', (req,res,next) => {
//   User.findAll(
//     {
//     include: [ Image ]
//   })
//   .then( users => res.send(users))
//   .catch( error => next(error))
// })

// // Works to get images from user
// app.get('/test', (req,res,next) => {
//   User.findOne({where: {username: "prof"}})
//   .then(user => user.getImages())
//   .then(images => res.send(images))
// })

// app.get('/', (req,res,next) => {
//   Image.findAll()
//     .then(images => {
//       res.send(images);
//     })
// })
