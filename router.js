const router = require("express").Router();
const userController = require("./controllers/user");
const viewController = require("./controllers/view");
const imageController = require("./controllers/image");

let _404 = "the requested link was not found on the server";

router.post("/adduser", userController.addUser);
router.get("/userdata", userController.getUser);
router.post("/updatesettings", userController.updateSettings);
router.post("/incrementCredits", userController.incrementCredit);
router.post("/decrementCredits", userController.decrementCredit);

router.post("/uploadImage", imageController.imageUpload);
router.get("/userimages", imageController.userImages);
router.post("/addView", viewController.addView);
router.get("/imagestream", imageController.imageStream);
router.get("/*", (req, res, next) => res.status(404).send(_404)); // Catchall for not found

module.exports = router;
