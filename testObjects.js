// Images for testing


const image1 = {
  uri:
    "https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg",
  userId: 1
};

const image2 = {
  uri:
    "https://res.cloudinary.com/diek0ztdy/image/upload/v1541860500/dickPicker/e74dd936-810b-434c-a236-239b5347fc2a.jpg",
  userId: 1
};

const image3 = {
  uri:
    "https://res.cloudinary.com/diek0ztdy/image/upload/v1541860510/dickPicker/83db7d3b-0d74-42d4-a464-9a79d99163f6.jpg",
  userId: 2
};


const testImages = [image1, image2, image3];

const user1 = {
  credits: 0,
  settings: {
    gender: "male",
    age: 26,
    feedbackGender: { male: false, female: true },
    feedbackAge: [true, false, true, false]
  },
    username: "Fred",
    password: "Password1"
};

const user2 = {
  credits: 5,
  settings: {
    gender: "male",
    age: 40,
    feedbackGender: { male: true, female: true },
    feedbackAge: [true, false, true, false]
  },
    username: "Inigo",
    password: "Password2"
};

const user3 = {
  credits: 10,
  settings: {
    gender: "female",
    age: 36,
    feedbackGender: { male: true, female: true },
    feedbackAge: [true, true, true, true]
  },
    username: "Charlie",
    password: "Password3"
};


const testUsers = [user1, user2, user3];


module.exports = {
  testImages,
  testUsers
};
