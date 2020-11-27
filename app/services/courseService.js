const courseDAO = require("../db/dao/courseDAO.js");

module.exports.getAllCourses = async function getAllCourses() {
  return await courseDAO.getCourseWhere();
};
