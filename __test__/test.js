// const IncrementCallback = async (req,res,next) => {
//   await userModule.incrementCredit(2);
//   await userModule.incrementCredit(2);
//   await userModule.incrementCredit(3);
//   await userModule.decrementCredit(2);
//   const result = await userModule.findAll();
//   res.send(result);
// }

// app.get('/Increment', IncrementCallback);

// const findByIdCallback = async (req,res,next) => {
  
//   const result = await userModule.findUserById(2);
//   res.send(result);
// }


// app.get('/UserByID', findByIdCallback);

// const findByNameCallback = async (req,res,next) => {
//   const result = await userModule.findUserByUsername("Fred");
//   res.send(result);
// }
// app.get('/UserByName', findByNameCallback);

// const updateByIdCallback = async (req,res,next) => {
//   const update = {
//     settings: {
//       gender: "both",
//       age: 80,
//       feedbackGender: { male: true, female: true },
//       feedbackAge: [true, false, true, false]
//     }
//   } 
//   await userModule.update(2,update);
//   const feedback = await userModule.findUserById(2);
//   res.send(feedback);
// }
// app.get('/Update', updateByIdCallback);

const Fred =
{
  credits: 0,
  settings: {
    gender: "male",
    feedbackGender: {
      male: true,
      female: true
    },
    feedbackAge: [true,true,false,false]
  },
  username: "fred",
  password: "Password01"
}

const Berta =
{
  credits: 0,
  settings: {
    gender: "female",
    feedbackGender: {
      male: true,
      female: false
    },
    feedbackAge: [false,true,true,false]
  },
  username: "berta",
  password: "Password01"
}

const Luke =
{
  credits: 0,
  settings: {
    gender: "male",
    feedbackGender: {
      male: false,
      female: true
    },
    feedbackAge: [true,false,false,true]
  },
  username: "luke",
  password: "Password01"
}

const Charlie =
{
  credits: 0,
  settings: {
    gender: "female",
    feedbackGender: {
      male: true,
      female: true
    },
    feedbackAge: [false,true,false,false]
  },
  username: "charlie",
  password: "Password01"
}

const Jovan =
{
  credits: 0,
  settings: {
    gender: "male",
    feedbackGender: {
      male: false,
      female: true
    },
    feedbackAge: [false,false,false,true]
  },
  username: "jovan",
  password: "Password01"
}

const Fred1 =
{
  credits: 0,
  settings: {
    gender: "male",
    feedbackGender: {
      male: true,
      female: true
    },
    feedbackAge: [true,true,false,false]
  },
  username: "fred",
  password: "Password01",
  uri: "https://res.cloudinary.com/diek0ztdy/image/upload/v1541860500/dickPicker/e74dd936-810b-434c-a236-239b5347fc2a.jpg",
}

const Berta1 =
{
  credits: 0,
  settings: {
    gender: "female",
    feedbackGender: {
      male: true,
      female: false
    },
    feedbackAge: [false,true,true,false]
  },
  username: "berta",
  password: "Password01"
}

const Luke1 =
{
  credits: 0,
  settings: {
    gender: "male",
    feedbackGender: {
      male: false,
      female: true
    },
    feedbackAge: [true,false,false,true]
  },
  username: "luke",
  password: "Password01"
}

const Charlie1 =
{
  credits: 0,
  settings: {
    gender: "female",
    feedbackGender: {
      male: true,
      female: true
    },
    feedbackAge: [false,true,false,false]
  },
  username: "charlie",
  password: "Password01"
}

const Jovan1 =
{
  credits: 0,
  settings: {
    gender: "male",
    feedbackGender: {
      male: false,
      female: true
    },
    feedbackAge: [false,false,false,true]
  },
  username: "jovan",
  password: "Password01"
}



