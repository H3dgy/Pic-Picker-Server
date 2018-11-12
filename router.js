const router = require('express').Router();

const testsController = require('./controllers/tests');
const userController = require('./controllers/user');
const viewController = require('./controllers/view');
const imageController = require('./controllers/image');


let _404 = "the requested link was not found on the server"

router.post('/adduser', userController.addUser);
router.get('/userdata', userController.getUser); 
router.post('/updatesettings', userController.updateSettings);
router.post('/incrementCredits', userController.incrementCredit);
router.post('/decrementCredits', userController.incrementCredit);

router.post('/uploadImage', imageController.imageUpload);
router.get('/userimages', imageController.userImages);
router.post('/addView', viewController.addView);
router.get('/imagestream', imageController.imageStream);

// //router.get('/addView', testsController.addView);
// router.get('/incrementImage', testsController.incrementImageCallBack);
// router.get('/Imagestream', testsController.imageStreamCallBack);
// router.get('/SeedImages', testsController.seedPicturesCallBack);
// router.get('/SeedUsers', testsController.seedUserCallback);
router.get('/*', (req,res,next) => res.status(404).send(_404)); // Catchall for not found

module.exports = router;