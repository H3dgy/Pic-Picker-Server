const router = require('express').Router();

const testsController = require('./controllers/tests');
const userController = require('./controllers/user');
const viewController = require('./controllers/view');
const imageController = require('./controllers/image');


let _404 = "the requested link was not found on the server"

router.get('/addView', testsController.addView);
router.get('/incrementImage', testsController.incrementImageCallBack);
router.get('/Imagestream', testsController.imageStreamCallBack);
router.get('/SeedImages', testsController.seedPicturesCallBack);
router.get('/SeedUsers', testsController.seedUserCallback);
router.get('/*', (req,res,next) => res.status(404).send(_404)); // Catchall for not found

module.exports = router;