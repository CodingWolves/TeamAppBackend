const _express = require("express");

/**
 * adds routes to express application
 * @param {_express.application} app express application
 */
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("root");
  });
};
