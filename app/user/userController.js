const userService = require("./userService.js");
const { User } = require("../models/User.js");
const express = require("express");

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function getUsers(req, res) {
  res.send(userService.users());
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
  if (user.error) {
    res.status(400).send(user);
  } else {
    let minUser = { email: user.email, password: user.password };
    res.cookie("user", minUser, { signed: true, httpOnly: true });
    res.status(205).send(minUser);
  }
}

function getUserDetails(req, res) {
  if (!req.signedCookies || !req.signedCookies.user)
    return res.status(400).send({ error: "must sign in first / missing signed cookie" });
  let details = userService.getUserDetails(req.signedCookies.user.email, req.signedCookies.user.password);
  res.status(details ? 200 : 400).send(details);
}

module.exports.getUsers = getUsers;
module.exports.getUserParamsUserId = getUserParamsUserId;
module.exports.postUserJoinGroup = postUserJoinGroup;
module.exports.putUpdateUser = putUpdateUser;
module.exports.getUserDetails = getUserDetails;
