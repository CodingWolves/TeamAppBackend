const { User } = require("../models/User.js");
const dummyDb = require("../db/dummyDb.js");

/**
 *
 * @param {User} user
 */
function signUp(user) {
  if (dummyDb.users.reduce((r, us) => r || us.email === user.email, false)) {
    return { error: "email already exist" };
  }
  dummyDb.users.push(user);
  return user;
}

module.exports.signUp = signUp;
