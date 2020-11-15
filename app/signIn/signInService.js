const dummyDb = require("../db/dummyDb.js");

module.exports.signIn = function signIn(email, password) {
  let user = dummyDb.users.find((user) => user.email == email && user.password == password && user);
  if (user) {
    let minUser = { email: user.email, password: user.password };
    return minUser;
  }
  return { error: "user not found" };
};
