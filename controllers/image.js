const imageModule = require("../modules/image");
const viewModule = require("../modules/view");

exports.imageUpload = async (req, res, next) => {
  const { id, uri, username, settings } = req.body;
  const { age, gender } = settings;
  try {
    const image = await imageModule.imageUpload(id, uri);
    await viewModule.addView(id, username, age, gender, true, image.id);
    const result = await imageModule.userImages(id);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

exports.userImages = async (req, res, next) => {
  const userId = req.headers.userid;
  try {
    let queryresult = await imageModule.userImages(userId);
    const result = await Promise.all(
      queryresult.map(image => _updateDataImage(image))
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

exports.imageStream = async (req, res, next) => {
  const { lastimageid, userid } = req.headers;
  let result;
  try {
    const queu1 = await imageModule.imageStream(userid, lastimageid, 1);
    if (queu1.length < 5) {
      const queu2 = await imageModule.imageStream(userid, lastimageid, 2);
      result = queu1.concat(queu2).slice(0, 10);
    } else {
      result = queu1.slice(0, 10);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
  res.status(200).send(result);
};

_updateDataImage = async image => {
  const views = image.views;
  const count = image.views.length;

  let feedbackAge = [
    { upVotes: 0, people: 0, summary: 0 },
    { upVotes: 0, people: 0, summary: 0 },
    { upVotes: 0, people: 0, summary: 0 },
    { upVotes: 0, people: 0, summary: 0 }
  ];
  let feedbackGender = {
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
  };
  let score = 5;
  let people = image.views.length;

  for (let index = 0; index < count; index++) {
    let view = views[index];
    const { userGender, userAge, isUpVote } = view;
    console.log("view: ", userAge, userGender, isUpVote);
    isUpVote ? score++ : score--;
    if (userGender === "both" || userGender === "male") {
      feedbackGender.male.upVotes = feedbackGender.male.upVotes + isUpVote;
      feedbackGender.male.people = feedbackGender.male.people + 1;
      feedbackGender.male.summary =
        feedbackGender.male.upVotes / feedbackGender.male.people;
    }
    if (userGender === "both" || userGender === "female") {
      feedbackGender.female.upVotes = feedbackGender.female.upVotes + isUpVote;
      feedbackGender.female.people = feedbackGender.female.people + 1;
      feedbackGender.female.summary =
        feedbackGender.female.upVotes / feedbackGender.female.people;
    }
    if (userAge >= 18 && userAge < 25) {
      feedbackAge[0].upVotes = feedbackAge[0].upVotes + isUpVote;
      feedbackAge[0].people = feedbackAge[0].people + 1;
      feedbackAge[0].summary = feedbackAge[0].upVotes / feedbackAge[0].people;
    } else if (userAge >= 25 && userAge < 35) {
      feedbackAge[1].upVotes = feedbackAge[1].upVotes + isUpVote;
      feedbackAge[1].people = feedbackAge[1].people + 1;
      feedbackAge[1].summary = feedbackAge[1].upVotes / feedbackAge[1].people;
    } else if (userAge >= 35 && userAge < 45) {
      feedbackAge[2].upVotes = feedbackAge[2].upVotes + isUpVote;
      feedbackAge[2].people = feedbackAge[2].people + 1;
      feedbackAge[2].summary = feedbackAge[2].upVotes / feedbackAge[2].people;
    } else if (userAge >= 45) {
      console.log("user age above 45");
      feedbackAge[3].upVotes = feedbackAge[3].upVotes + isUpVote;
      feedbackAge[3].people = feedbackAge[3].people + 1;
      feedbackAge[3].summary = feedbackAge[3].upVotes / feedbackAge[3].people;
    }
  }
  const newData = {
    score: score,
    people: people,
    feedbackGender: feedbackGender,
    feedbackAge: feedbackAge
  };
  await imageModule.imageUpdate({ data: newData }, image.id);
  const result = await imageModule.findImage(image.id);
  console.log(result);
  return result;
};
