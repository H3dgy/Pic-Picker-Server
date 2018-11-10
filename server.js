const express = require('express');
const db = require('./db');
const app = express();

app.get('/', (req,res,next) => {
  res.send('hello');
})

const port = 3000;

db.sync();

app.listen(port, ()=> console.log(`listening on port ${port}`))