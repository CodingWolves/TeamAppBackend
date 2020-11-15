const { User } = require("../models/User.js");
const { Course } = require("../models/Course.js");
const { Group } = require("../models/Group.js");

module.exports.users = [
  new User({
    email: "admin@admin.com",
    name: "Administrator",
    password: "admin",
  }),
  new User({
    email: "email@org.com",
    name: "name",
    password: "1234",
  }),
];
module.exports.courses = [
  new Course("1", "a"),
  new Course("2", "b"),
  new Course("3", "c"),
  new Course("4", "d"),
  new Course("5", "e"),
];
module.exports.studyGroups = [new Group(1), new Group(2), new Group(3), new Group(4)];
