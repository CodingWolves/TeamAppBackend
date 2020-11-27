const _Course = require("../../_models/Course.js");
const { db } = require("../dbConnection.js");

/**
 * @param {_Course} Course
 */
module.exports.createCourse = function createCourse(Course) {
  return db.courses.create({ data: Course });
};

/**
 * @param {_Course} CourseWhere
 */
module.exports.getCourseWhere = function getCourseWhere(CourseWhere) {
  return db.courses.findMany({ where: CourseWhere });
};

/**
 * @param {_Course} CourseWhere
 */
module.exports.deleteCourse = function deleteCourse(CourseWhere) {
  return db.courses.delete({ where: CourseWhere });
};

/**
 * @param {_Course} CourseSet
 * @param {_Course} CourseWhere
 */
module.exports.updateCourseWhere = function updateCourseWhere(CourseSet, CourseWhere) {
  return db.courses.update({ where: CourseWhere, data: CourseSet });
};
