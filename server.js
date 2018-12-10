const express = require("express");
const db = require("./db");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(router);

(async () => {
  try {
    await db.sync();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
})();
