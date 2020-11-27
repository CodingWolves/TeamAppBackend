const _express = require("express");
const signUpController = require("../controllers/signUpController.js");

/**
 * adds routes to express application
 * @param {_express.application} app express application
 */
module.exports = (app) => {
  app.post("/signUp", signUpController.postSignUp);
};
