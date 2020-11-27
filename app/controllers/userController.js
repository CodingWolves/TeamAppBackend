const userService = require("../services/userService.js");
const User = require("../_models/User.js");
const _express = require("express");

/**
 * @param {_express.request} req
 * @param {_express.response} res
 */
module.exports.getUsers = function getUsers(req, res) {
  userService.getAllUsers().then(result => {
    res.status(200).send(result);
  }).catch(err => {
    res.status(400).send(err);
  });
};

/**
 * @param {_express.request} req
 * @param {_express.response} res
 */
module.exports.putUpdateUser = function putUpdateUser(req, res) {
  if (!req.signedCookies || !req.signedCookies.user) return res.status(400).send({ error: "must sign in first / missing signed cookie" });
  if (!req.body) return res.status(400).send({ error: "must have body" });
  const user = new User();
  for (const key in user) {
    user[key] = req.body[key];
  }
  user.email = req.signedCookies.user.email;
  user.password = req.signedCookies.user.password;
  userService.updateUser(user).then(result => {
    const minUser = { email: user.email, name: result.name };
    const credUser = { email: user.email, password: user.password };
    res.myCookie("user", credUser);
    res.status(205).send(minUser);
  }).catch(err => {
    res.status(400).send(err);
  });
};

/**
 * @param {_express.request} req
 * @param {_express.response} res
 */
module.exports.getUserDetails = function getUserDetails(req, res) {
  if (!req.signedCookies || !req.signedCookies.user) return res.status(400).send({ error: "must sign in first / missing signed cookie" });
  userService.getUserDetails(req.signedCookies.user.email, req.signedCookies.user.password).then(result => {
    res.status(200).send(result);
  }).catch(err => {
    res.status(400).send(err);
  });
};
