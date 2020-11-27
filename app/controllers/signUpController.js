const _express = require("express");
const User = require("../_models/User.js");
const signUpService = require("../services/signUpService.js");

/**
 * @param {_express.request} req
 * @param {_express.response} res
 */
module.exports.postSignUp = function postSignUp(req, res) {
  if (!req.body) {
    return res.status(400).send({ error: "body is empty" });
  }
  const user = new User();
  for (const key in user) {
    user[key] = req.body[key];
  }
  signUpService.signUp(user).then(result => {
    const minUser = { email: result.email, name: result.name };
    const credUser = { email: result.email, password: result.password };
    res.myCookie("user", credUser);
    res.status(201).send(minUser);
  }).catch(err => {
    res.status(400).send(err);
  });
};
