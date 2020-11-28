const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
module.exports.db = prisma;

// need to run this on mysql server `
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; flush privileges;

// dummyDb addition
const dummyDb = require("./dummyDb.js");

for (const userIndex in dummyDb.users) {
  const user = dummyDb.users[userIndex];
  prisma.users.upsert({ create: user, update: {}, where: { email: user.email } }).then((_res) => {
    // console.log(`upsert user ${JSON.stringify(_res.email)}`);
  });
}
for (const courseIndex in dummyDb.courses) {
  const course = dummyDb.courses[courseIndex];
  prisma.courses.upsert({ create: course, update: {}, where: { id: Number(courseIndex) + 1 } }).then((_res) => {
    // console.log(`upsert course ${JSON.stringify(_res.id)}`);
  });
}
for (const groupIndex in dummyDb.studyGroups) {
  const group = dummyDb.studyGroups[groupIndex];
  delete group.course;
  delete group.id;
  prisma.groups.upsert({ create: group, update: {}, where: { id: Number(groupIndex) + 1 } }).then((_res) => {
    // console.log(`upsert group ${JSON.stringify(_res.id)}`);
  });
}

console.log("dummy init");
