const _User = require("../_models/User.js");
const userDAO = require("../db/dao/userDAO.js");
const ErrorException = require("../_exceptions/ErrorException.js");

/**
 * @param {_User} user
 */
module.exports.updateUser = async (user) => {
  const users = await userDAO.getUserWhere({ email: user.email });
  console.log("updateUser", users);
  if (users && users.length > 0) {
    return await userDAO.updateUserWhere(user, { email: user.email });
  }
  throw new ErrorException("user not found");
};

module.exports.getAllUsers = async () => {
  return await userDAO.getUserWhere();
};

/**
 * @param {string} email
 * @param {string} password
 */
module.exports.getUserDetails = async (email, password) => {
  const users = await userDAO.getUserWhere({ email, password });
  if (users && users.length > 0) {
    return users[0];
  }
  throw new ErrorException("user not found");
};
