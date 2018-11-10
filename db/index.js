const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL);

const User = db.define("user", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  settings: Sequelize.JSON,
  credits: Sequelize.INTEGER
});

const Image = db.define("image", {
  uri: Sequelize.STRING,
  data: Sequelize.JSON,
  priority: Sequelize.INTEGER
});

const View = db.define("view", {
  userId: Sequelize.INTEGER,
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
