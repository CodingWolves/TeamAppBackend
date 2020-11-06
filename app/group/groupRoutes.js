const express = require("express");
const groupController = require("./groupController.js");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.get("/group", groupController.getGroupByQuery);
  app.get("/group/:id", groupController.getGroupById);
  app.post("/group/create", groupController.postCreateGroup);
  app.put("/group", groupController.updateGroup);
};
