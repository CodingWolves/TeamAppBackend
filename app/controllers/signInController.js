const _express = require("express");
const signInService = require("../services/signInService.js");

/**
 * @param {_express.request} req
 * @param {_express.response} res
 */
module.exports.postSignIn = function postSignIn(req, res) {
  if (!req.body) return res.status(400).send({ error: "body is empty" });
  const signEmail = req.body.email;
  const signPassword = req.body.password;
  if (!signEmail || !signPassword) return res.status(400).send({ error: "missing email or password" });

  signInService
    .signIn(signEmail, signPassword)
    .then((result) => {
      const minUser = { email: signEmail, name: result.name };
      const credUser = { email: signEmail, password: signPassword };
      res.myCookie("user", credUser);
      res.status(200).send(minUser);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
