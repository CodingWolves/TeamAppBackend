const courseService = require("../services/courseService.js");
const _express = require("express");

/**
 * @param {_express.request} req
 * @param {_express.response} res
 */
module.exports.getAllCourses = function getAllCourses(req, res) {
  courseService
    .getAllCourses()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
