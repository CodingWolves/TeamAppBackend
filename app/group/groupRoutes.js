const express = require("express");
const groupController = require("./groupController.js");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.get("/group", groupController.getGroup);
  app.post("/group", groupController.postGroup);
};
