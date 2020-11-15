const express = require("express");
const userController = require("./userController.js");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.get("/users", userController.getUsers);
  app.get("/user/details", userController.getUserDetails);
  app.put("/user/update", userController.putUpdateUser);
  app.get("/user/:userId", userController.getUserParamsUserId);
  app.post("/user/joinGroup", userController.postUserJoinGroup);
};
