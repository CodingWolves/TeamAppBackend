const dummyDb = require("../db/dummyDb.js");

module.exports.signIn = function signIn(email, password) {
  let user = dummyDb.users.find((user) => user.email == email && user.password == password && user);
  if (user) {
    return user;
  }
  return { error: "user not found" };
};
