const dummyDb = require("../db/dummyDb.js");

module.exports.signIn = function signIn(email, password) {
  return dummyDb.users.find((user) => user.email == email && user.password == password && user);
};
