const userService = require("./userService.js");
const { User } = require("../models/User.js");
const express = require("express");

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function getUser(req, res) {
  if (req.query.error) return res.send(`${req.query.error}`);
  res.send(userService.users);
}

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function getUserParamsUserId(req, res) {
  user = {
    userId: req.params.userId,
  };
  var result = userService.getUserWhereAnd(user);
  if (result.length == 0) return res.redirect(`/user?error=no results`);
  res.send(result);
}

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function postUserJoinGroup(req, res) {
  var user = req.body.user;
  var group = req.body.group;
  res.send(userService.joinGroup(user, group));
}

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function putUpdateUser(req, res) {
  console.log(req.signedCookies.user);
  if (!req.signedCookies || !req.signedCookies.user)
    return res.status(400).send({ error: "must sign in first / missing signed cookie" });
  if (!req.body) return res.status(400).send({ error: "must have body" });
  let user = new User();
  for (let key in user) {
    user[key] = req.body[key];
  }
  user.email = req.signedCookies.user.email;
  user.password = req.signedCookies.user.password;
  user = userService.updateUser(user);
  // console.log(user);
  if (user.error){
    res.status(400).send(user);
  } else {
    res.cookie("user", user, { signed: true });
    res.status(205).send(user);
  }
}

module.exports.getUser = getUser;
module.exports.getUserParamsUserId = getUserParamsUserId;
module.exports.postUserJoinGroup = postUserJoinGroup;
module.exports.putUpdateUser = putUpdateUser;
