const searchUtils = require("../utils/searchUtils.js");
const userInterface = require("./userInterface.js");

/**
 * 
 * @param {userInterface} user 
 */
module.exports.query = (user) => {
  return searchUtils.query(user, users);
  
};

module.exports.joinGroup = (user, groupId) => {
  // checks if user can join group
  return `user ${JSON.stringify(user)} joined group ${groupId}`;
};

var users = [
  {
    userId: "1",
    firstName: "ido",
    lastName: "zahavy",
    email: "idozahavy@gmail.com",
  },
  {
    userId: "2",
    firstName: "gal",
    lastName: "zilca",
    email: "galzilca@gmail.com",
  },
  {
    userId: "3",
    firstName: "nadav",
    lastName: "weisler",
    email: "nadavweisler@gmail.com",
  },
];
module.exports.users = users;
