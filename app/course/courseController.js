const courseService = require("./courseService.js");

function getAllCourses(req, res) {
	res.status(200).send(courseService.getAllCourses());
}

module.exports.getAllCourses = getAllCourses;