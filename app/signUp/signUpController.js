const express = require("express");
const { User } = require("../models/User.js");
const signUpService = require("./signUpService.js");

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
module.exports.postSignUp = function postSignUp(req, res) {
  
  if (!req.body) {
    return res.status(400).send({ error: "body is empty" });
  }
  const user = new User();
  for (let key in user) {
    user[key] = req.body[key];
  }
  let result = signUpService.signUp(user);
  res.status(result.error ? 400 : 201).send(result);
};
