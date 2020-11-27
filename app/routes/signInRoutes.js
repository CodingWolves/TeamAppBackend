const _express = require("express");
const { postSignIn } = require("../controllers/signInController.js");

/**
 * adds routes to express application
 * @param {_express.application} app express application
 */
module.exports = (app) => {
  app.post("/signIn", postSignIn);
};
