const _express = require("express");
const courseController = require("../controllers/courseController.js");

/**
 * adds routes to express application
 * @param {_express.application} app express application
 */
module.exports = (app) => {
  app.get("/courses", courseController.getAllCourses);
};
