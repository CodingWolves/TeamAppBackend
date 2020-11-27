const _User = require("../_models/User.js");
const userDAO = require("../db/dao/userDAO.js");
const ErrorException = require("../_exceptions/ErrorException.js");

/**
 * @param {_User} user
 */
module.exports.signUp = async function signUp(user) {
  const users = await userDAO.getUserWhere({ email: user.email });
  console.log("signUp", users);
  if (users && users.length > 0) {
    throw new ErrorException("email already exist");
  }
  return await userDAO.createUser(user);
};
