const viewModule = require("../modules/view");
const imageModule = require("../modules/image");

exports.addView = async (req,res,next) => {
  const {userId,username,imageId, settings, isUpVote} = req.body;
  const {age,gender} = settings;
  try {
    const image = await imageModule.findImage(imageId);
    if(image.priority === 1 && image.views.length === 9) {
      await imageModule.incrementPriority(imageId);
    }
    await viewModule.addView(userId,username,age,gender,isUpVote,imageId);
    const result = await imageModule.viewImages();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
}