const dummyDb = require("../db/dummyDb.js");

function getAllCourses() {
	return dummyDb.courses;
}

module.exports.getAllCourses = getAllCourses;