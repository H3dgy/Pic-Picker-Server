const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/database.js")[env];
let db = {};
let _conn;

if (config.use_env_variable) {
  db = new Sequelize(process.env[config.use_env_variable], config);
} else {
  db = new Sequelize(config.database, config.username, config.password, config);
}

const User = db.define("user", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  settings: Sequelize.JSON,
  credits: Sequelize.INTEGER,
  userRanking: Sequelize.INTEGER
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
  userGender: Sequelize.STRING,
  userRanking: Sequelize.INTEGER,
  isUpVote: Sequelize.BOOLEAN
});

Image.belongsTo(User);
User.hasMany(Image);
Image.hasMany(View);
View.belongsTo(Image);

const connect = () => {
  if (_conn) return _conn;
  _conn = db.authenticate();
  return _conn;
};

const sync = () => {
  return connect().then(() => {
    console.log("Connection has been established successfully.");
  });
};

module.exports = {
  sync,
  models: {
    Image,
    User,
    View
  },
  sequelize: db
};
