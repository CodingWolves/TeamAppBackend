const express = require("express");
const rootRoutes = require("./_root/rootRoutes.js");
const userRoutes = require("./user/userRoutes.js");
const groupRoutes = require("./group/groupRoutes.js");
const signUpRoutes = require("./signUp/signUpRoutes.js");
const signInRoutes = require("./signIn/signInRoutes.js");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  rootRoutes(app);
  userRoutes(app);
  groupRoutes(app);
  signUpRoutes(app);
  signInRoutes(app);
};
