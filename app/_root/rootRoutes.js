const express = require("express");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.get("/", (req, res) => {
    // console.log(`Get on process ${process.pid}`);
    // req.session.magAge = 2;
    // if (!req.session.count){
    //   req.session.count=0;
    // }
    // req.session.count++;
    res.send("root");
  });
};
