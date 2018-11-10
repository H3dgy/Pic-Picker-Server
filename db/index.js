const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL);

const User = db.define("user", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  settings: Sequelize.JSON
});

const Image = db.define("image", {
  uri: Sequelize.STRING,
  data: Sequelize.JSON,
  priority: Sequelize.INTEGER
});

const View = db.define("view", {
  userId: Sequelize.UUID,
  username: Sequelize.STRING,
  userAge: Sequelize.INTEGER,
  userGender: Sequelize.STRING
})

Image.belongsTo(User);
User.hasMany(Image);
Image.hasMany(View);


// promise
let _conn;

const connect = () => {
  if (_conn) return _conn;
  // returns promise
  _conn = db.authenticate();
  return _conn;
};

const sync = () => {
  return connect().then(() => {
    console.log("Connection has been established successfully.");
    return db.sync({ force: true });
  });
};

// const seed = () => {
//   return connect()
//     .then(() => {
//       return User.create({
//         username: "prof",
//         password: "John",
//         settings: {
//           gender: "male",
//           age: 30,
//           feedbackGender: { male: true, female: false },
//           feedbackAge: [true, true, false, false]
//         }
//       });
//     })
//     .then(user => {
//       return Image.create({
//         uri:
//           "https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg",
//         data: {
//           score: 7,
//           people: 10,
//           feedbackGender: { male: 10, female: 90 },
//           feedbackAge: [80, 23, 56, 76]
//         },
//         priority: 1,
//         userId: user.id
//       });
//     })
//     .then(image => {
//       return Image.create({
//         uri:
//           "https://res.cloudinary.com/diek0ztdy/image/upload/v1541795901/dickPicker/syodnbfp59llpxmug7lv.jpg",
//         data: {
//           score: 9,
//           people: 12,
//           feedbackGender: {male: 30, female: 70}, 
//           feedbackAge: [50,25,30,50]
//         },
//         priority: 1,
//         userId: image.userId
//       });
//     });
// };

module.exports = {
  sync,
  // seed,
  models: {
    Image,
    User,
    View
  },
  sequelize: db
};
