const express = require("express");
const signInService = require("./signInService.js");

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
module.exports.postSignIn = function postSignIn(req, res) {
  if (!req.body) return res.status(400).send({ error: "body is empty" });
  let signEmail = req.body.email;
  let signPassword = req.body.password;
  if (!signEmail || !signPassword) return res.status(400).send({ error: "missing email or password" });

  let user = signInService.signIn(signEmail, signPassword);
  if (!user.error) {
    let minUser = { email: signEmail, name: user.name };
    let credUser = { email: signEmail, password: signPassword };
    res.cookie("user", credUser, { signed: true, httpOnly: true });
    res.status(200).send(minUser);
  } else {
    res.status(400).send(user);
  }
};
