const express = require("express");
const { getGroup, postGroup } = require("./groupController.js");
const groupService = require("./groupService.js");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.get("/group", getGroup);
  app.post("/group", postGroup);
};
