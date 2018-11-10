const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL);

// promise
let _conn;

const connect = () => {
  if(_conn) return _conn;
  // returns promise
  _conn = db.authenticate();
  return _conn;
}


const sync = () => {
  connect()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
};

const seed = () => {

}




module.exports = {
  sync,
  seed
}