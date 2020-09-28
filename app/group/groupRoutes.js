const express = require("express");
const groupService = require("./groupService.js");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.get("/group", (req, res) => {
    var result = groupService.query(req.query);
    res.send(result);
  });
  app.post("/group", (req, res) => {
    var result = groupService.add(req.body.group);
    if (result && result.error) {
      console.log(result);
      res.status(404).send(result.error.details[0].message);
      return;
    }
    res.send(result);
  });
};
