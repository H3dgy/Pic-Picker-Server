const userModule = require("../modules/user");
const imageModule = require("../modules/image");
const viewModule = require("../modules/view")
const { testImages, testUsers } = require("../testObjects");

exports.seedUserCallback = async (req,res,next) => {
  await Promise.all(testUsers.map(user => {
    return userModule.addUser(user.username,user.password,user.settings);
  }))
  const result = await userModule.findAll();
  res.send(result);
}

exports.seedPicturesCallBack = async (req,res,next) => {
  await Promise.all(testImages.map(image => {
    return imageModule.imageUpload(image.userId,image.uri)
  }))
  const result = await imageModule.findAll();
  res.send(result);
}

exports.imageStreamCallBack = async (req,res,next) => {
  const date = Date.parse("2018-11-10T11:45:45.491Z");
  const result = await imageModule.imageStream(2, date, 1);
  console.log(result);
  res.send(result);
}

exports.incrementImageCallBack = async (req,res,next) => {
  await imageModule.incrementPriority('https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg');
  await imageModule.incrementPriority('https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg');
  await imageModule.decrementPriority('https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg');
  const result = await imageModule.findImage('https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg');
  console.log(result);
  res.send(result);
}

exports.addView = async (req,res,next) => {
  await viewModule.addView(1,"luke",60,50,1);
  const result = await imageModule.viewImages();
  res.send(result);
}
