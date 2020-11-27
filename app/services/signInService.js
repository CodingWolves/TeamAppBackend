const userDAO = require("../db/dao/userDAO.js");
const ErrorException = require("../_exceptions/ErrorException.js");

module.exports.signIn = async function signIn(email, password) {
  const users = await userDAO.getUserWhere({ email: email, password: password });
  console.log("signIn", users);
  if (users && users.length > 0) {
    return users[0];
  }
  throw new ErrorException("user not found");
};
