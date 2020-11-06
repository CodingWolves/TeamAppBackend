const express = require("express");
const signInService = require("./signInService.js");

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
module.exports.postSignIn = function postSignIn(req, res) {
  if (!req.body) return res.status(400).send({ error: "body is empty" });
  signEmail = req.body.email;
  signPassword = req.body.password;
  if (!signEmail || !signPassword) return res.status(400).send({ error: "missing email or password" });

  user = signInService.signIn(signEmail, signPassword);
  if (user) {
    res.cookie("user", user, { signed: true });
    res.status(200).send(user);
  } else {
    res.status(400).send({ error: "user not found" });
  }
};
