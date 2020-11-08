const express = require("express");
const courseController = require("./courseController.js");

/**
 * adds routes to express application
 * @param {express.application} app express application
 */
module.exports = function (app) {
  app.get("/courses", courseController.getAllCourses);
};
