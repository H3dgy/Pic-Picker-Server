// Images for testing

const testimages = [image1, image2, image3];
const testusers = [user1, user2, user3];

const image1 = {
  uri:
    "https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg",
  data: {
    score: 6,
    people: 10,
    feedbackGender: { male: 50, female: 50 },
    feedbackAge: [50, 25, 30, 50]
  }
};

const image2 = {
  uri:
    "https://res.cloudinary.com/diek0ztdy/image/upload/v1541860500/dickPicker/e74dd936-810b-434c-a236-239b5347fc2a.jpg",
  data: {
    score: 8,
    people: 13,
    feedbackGender: { male: 80, female: 20 },
    feedbackAge: [50, 30, 30, 60]
  }
};

const image3 = {
  uri:
    "https://res.cloudinary.com/diek0ztdy/image/upload/v1541860510/dickPicker/83db7d3b-0d74-42d4-a464-9a79d99163f6.jpg",
  data: {
    score: 9,
    people: 14,
    feedbackGender: { male: 15, female: 85 },
    feedbackAge: [25, 25, 30, 40]
  }
};

const user1 = 
{credits: 0, 
  settings: {
    gender: 'male', 
    age: 26, 
    feedbackGender: {male: false, female: true}, 
    feedbackAge: [true,false,true,false]
  },
  details: {
    username: 'Fred',
    password: 'Password1'
  }
};

const user2 = {credits: 5, 
  settings: {
    gender: 'male', 
    age: 40, 
    feedbackGender: {male: true, female: true}, 
    feedbackAge: [true,false,true,false]
  },
  details: {
    username: 'Inigo',
    password: 'Password2'
  }
};

const user3 = {credits: 10, 
  settings: {
    gender: 'female', 
    age: 36, 
    feedbackGender: {male: true, female: true}, 
    feedbackAge: [true,true,true,true]
  },
  details: {
    username: 'Charlie',
    password: 'Password3'
  }
};

module.exports = {
  testimages,
  testusers
};