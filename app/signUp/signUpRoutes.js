const express = require("express");
const signUpController = require("./signUpController.js");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.post("/signUp", signUpController.postSignUp);
};
