const express = require("express");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.get("/", (req, res) => {
    console.log(`Get on process ${process.pid}`);
    res.send("root");
  });
};
