const _express = require("express");
const groupController = require("../controllers/groupController.js");

/**
 * adds routes to express application
 * @param {_express.application} app express application
 */
module.exports = (app) => {
  app.get("/group/:id", groupController.getGroupById);
  app.post("/group/create", groupController.postCreateGroup);
  app.put("/group/join", groupController.putJoinGroup);
  app.get("/groups", groupController.getAllGroups);
};
