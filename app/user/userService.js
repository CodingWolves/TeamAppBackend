const searchUtils = require("../utils/searchUtils.js");
const dummyDb = require("../db/dummyDb.js");
const User = require("../models/User.js");

/**
 *
 * @param {User} user
 */
module.exports.getUserWhereAnd = (user) => {
  return searchUtils.query(user, dummyDb.users);
};

/**
 *
 * @param {User} user
 * @param {int} groupId
 */
module.exports.joinGroup = (user, groupId) => {
  // checks if user can join group
  return `user ${JSON.stringify(user)} joined group ${groupId}`;
};

/**
 * @param {User} user
 */
module.exports.updateUser = (user) => {
  for (let i = 0; i < dummyDb.users.length; i++) {
    const dbUser = dummyDb.users[i];
    if (dbUser.email === user.email) {
      for (let key in user) {
        if (key === "email" || key === "password" || dbUser[key] === undefined) continue;
        dbUser[key] = user[key];
      }
      return dbUser;
    }
  }
};
