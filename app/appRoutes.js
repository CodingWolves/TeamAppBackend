const _express = require("express");
const rootRoutes = require("./routes/rootRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const groupRoutes = require("./routes/groupRoutes.js");
const signUpRoutes = require("./routes/signUpRoutes.js");
const signInRoutes = require("./routes/signInRoutes.js");
const courseRoutes = require("./routes/courseRoutes.js");

/**
 * adds routes to express application
 * @param {_express.application} app express application
 */
module.exports = function (app) {
  rootRoutes(app);
  userRoutes(app);
  groupRoutes(app);
  signUpRoutes(app);
  signInRoutes(app);
  courseRoutes(app);
};
