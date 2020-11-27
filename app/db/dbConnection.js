const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
module.exports.db = prisma;

// need to run this on mysql server `
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; flush privileges;
