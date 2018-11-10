const express = require('express');
const db = require('./db');
const app = express();
const userModule = require('./modules/user');
const imageModule = require('./modules/image');

// Sequelize models

const port = 3000;

(async () => {
  try {
    await db.sync();

    app.listen(port, ()=> console.log(`listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
})();

const _seed = () => {

}

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
