const userModule = require("../modules/user");

exports.getUser = async (req, res, next) => {
  const { username } = req.headers;
  try {
    const result = await userModule.findUserByUsername(username);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

exports.addUser = async (req, res, next) => {
  const { username, password, settings } = req.body;
  const control = await userModule.findUserByUsername(username);
  if (control) {
    res.status(600).send("username exists");
    return;
  }
  try {
    const result = await userModule.addUser(username, password, settings);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};

exports.updateSettings = async (req, res, next) => {
  const { id, settings } = req.body;
  try {
    await userModule.update(id, { settings });
    const result = await userModule.findUserById(id);
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(401).send();
  }
};

exports.incrementCredit = async (req, res, next) => {
  const { id } = req.body;
  try {
    const result = await userModule.incrementCredit(id);
    res.status(200).send(result[0][0][0]);
  } catch (error) {
    console.log(error);
    res.status(401).send();
  }
};

exports.decrementCredit = async (req, res, next) => {
  const { id } = req.body;
  try {
    const result = await userModule.decrementCredit(id);
    res.status(200).send(result[0][0][0]);
  } catch (error) {
    console.log(error);
    res.status(401).send();
  }
};
