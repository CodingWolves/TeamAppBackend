const express = require("express");
const { postSignIn } = require("./signInController.js");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.post("/signIn", postSignIn);
};
