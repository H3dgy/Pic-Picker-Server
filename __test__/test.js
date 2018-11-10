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
