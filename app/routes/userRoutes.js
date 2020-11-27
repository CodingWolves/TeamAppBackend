const _express = require("express");
const userController = require("../controllers/userController.js");

/**
 * adds routes to express application
 * @param {_express.application} app express application
 */
module.exports = (app) => {
  app.get("/users", userController.getUsers);
  app.get("/user/details", userController.getUserDetails);
  app.put("/user/update", userController.putUpdateUser);
};
