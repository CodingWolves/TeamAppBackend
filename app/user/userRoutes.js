const express = require("express");
const userService = require("./userService.js");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.get("/user", (req, res) => {
    // console.log(`process is ${process.pid}`);
    if (req.query.error) return res.send(`${req.query.error}`);
    res.send(userService.users);
  });
  
  app.get("/user/:userId", (req, res) => {
    user = {
      userId: req.params.userId,
    };
    var result = userService.query(user);
    if (result.length == 0) res.redirect(`/user?error=no results`);
    res.send(result);
  });
  app.post("/user/joinGroup", (req, res) => {
    res.send(userService.joinGroup(req.body.user, req.body.group));
  });
};
