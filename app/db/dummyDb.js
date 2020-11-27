const { User } = require("../_models/User.js");
const { Course } = require("../_models/Course.js");
const { Group } = require("../_models/Group.js");

module.exports.users = [
  new User({
    email: "admin@admin.com",
    name: "Administrator",
    password: "admin"
  }),
  new User({
    email: "email@org.com",
    name: "name",
    password: "1234"
  })
];
module.exports.courses = [
  new Course("course value1", "course label1"),
  new Course("course value2", "course label2"),
  new Course("course value3", "course label3"),
  new Course("course value4", "course label4"),
  new Course("course value5", "course label5")
];
module.exports.studyGroups = [
  new Group(1, "name1", this.courses[0], "first subject", true, "at my house", "HIT", 42, "desc1", "10:00->20:00", "3 hours", 1),
  new Group(2, "name2", this.courses[2], "second subject", false, "at your house", "HIT", 5, "desc2", "11:00->12:00", "3 hours", 1),
  new Group(3, "name3", this.courses[1], "third subject", true, "library", "Johns", 4, "desc3", "05:00->16:00", "4 hours", 2),
  new Group(4, "name4", this.courses[3], "fourth subject", false, "zoom", "MIT", 90, "desc4", "12:00->18:00", "2 hours", 1)
];
