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
  userRanking: {
    type: Sequelize.INTEGER,
    field: 'user_ranking'
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at'
  }},
  {
    timestamps: true
  }
);

const Image = db.define("image", {
  userId: {
    type: Sequelize.UUID,
    field: 'user_id'
  },
  uri: Sequelize.STRING,
  data: Sequelize.JSON,
  priority: Sequelize.INTEGER,
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at'
  }},
  {
    timestamps: true
  }
);

const View = db.define("view", {
  userId: {
    type: Sequelize.UUID,
    field: 'user_id'
  },
  imageId: {
    type: Sequelize.UUID,
    field: 'image_id'
  },
  username: Sequelize.STRING,
  userAge: {
    type: Sequelize.INTEGER,
    field: 'user_age'
  },
  userGender: {
    type: Sequelize.STRING,
    field: 'user_gender'
  },
  userRanking: {
    type: Sequelize.INTEGER,
    field: 'user_ranking'
  },
  isUpVote: {
    type: Sequelize.BOOLEAN,
    field: 'is_up_vote'
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at'
  }},
  {
    timestamps: true
  }
);

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
