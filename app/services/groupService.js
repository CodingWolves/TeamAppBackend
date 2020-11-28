const _User = require("../_models/User.js");
const _Group = require("../_models/Group.js");
const groupDAO = require("../db/dao/groupDAO.js");
const ErrorException = require("../_exceptions/ErrorException.js");

/**
 * @param {_Group} group
 * @param {_User} user
 */
module.exports.createGroup = async function createGroup(group, user) {
  group.ownerId = user.email;
  const res = await groupDAO.createGroup(group);
  if (res) {
    return res;
  }
  throw new ErrorException("can not add group");
};

/**
 * @param {int} id
 */
module.exports.getGroupById = async function getGroupById(id) {
  const groups = await groupDAO.getGroupWhere({ id: id });
  console.log("getGroupById", groups);
  if (groups && groups.length > 0) {
    return groups[0];
  }
  console.log("getGroupById error ", { error: "group not found" });
  throw new ErrorException("group not found");
};

/**
 * @param {int} groupId
 * @param {_User} user
 */
// eslint-disable-next-line no-unused-vars
module.exports.userJoin = async function userJoin(groupId, user) {
  const group = await this.getGroupById(groupId);
  if (!group.participantsNumber) {
    group.participantsNumber = 0;
  }
  group.participantsNumber++;
  console.log("1", group);
  return await groupDAO.updateGroupWhere(group, { id: groupId });

  // TODO add user to group

  // return group;
};

module.exports.getAllGroups = async function getAllGroups() {
  return await groupDAO.getGroupWhere();
};
