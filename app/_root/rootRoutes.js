const express = require("express");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.get("/", (req, res) => {
    res.send("root");
  });
};
