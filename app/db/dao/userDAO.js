const _User = require("../../_models/User.js");
const { db } = require("../dbConnection.js");

/**
 * @param {_User} User
 */
module.exports.createUser = function createUser(User) {
  return db.users.create({ data: User });
};

/**
 * @param {_User} UserWhere
 */
module.exports.getUserWhere = function getUserWhere(UserWhere) {
  return db.users.findMany({ where: UserWhere });
};

/**
 * @param {_User} UserWhere
 */
module.exports.deleteUser = function deleteUser(UserWhere) {
  return db.users.delete({ where: UserWhere });
};

/**
 * @param {_User} UserSet
 * @param {_User} UserWhere
 */
module.exports.updateUserWhere = function updateUserWhere(UserSet, UserWhere) {
  return db.users.update({ where: UserWhere, data: UserSet });
};
