const express = require("express");
const db = require("./db");
const app = express();
const userModule = require("./modules/user");
const imageModule = require("./modules/image");
const { testImages, testUsers } = require("./testObjects");

// Sequelize models

const port = 3000;


const seedUserCallback = async (req,res,next) => {
  await Promise.all(testUsers.map(user => {
    return userModule.addUser(user.username,user.password,user.settings);
  }))
  const result = await userModule.findAll();
  res.send(result);
}

app.get('/SeedUsers', seedUserCallback);

const seedPicturesCallBack = async (req,res,next) => {
  await Promise.all(testImages.map(image => {
    return imageModule.imageUpload(image.userId,image.uri)
  }))
  const result = await imageModule.findAll();
  res.send(result);
}

app.get('/SeedImages', seedPicturesCallBack);

(async () => {
  try {
    await db.sync();
    // await _seedImages();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
})();

const imageStreamCallBack = async (req,res,next) => {
  const date = Date.parse("2018-11-10T11:45:45.491Z");
  const result = await imageModule.imageStream(1, date, 1);
  console.log(result);
  res.send(result);
}

app.get('/Imagestream', imageStreamCallBack);

const incrementImageCallBack = async (req,res,next) => {
  await imageModule.incrementPriority('https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg');
  await imageModule.incrementPriority('https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg');
  await imageModule.decrementPriority('https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg');
  const result = await imageModule.findImage('https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg');
  console.log(result);
  res.send(result);
}

app.get('/incrementImage', incrementImageCallBack);


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
