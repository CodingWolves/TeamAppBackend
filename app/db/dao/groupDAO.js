const _Group = require("../../_models/Group.js");
const { db } = require("../dbConnection.js");

/**
 * @param {_Group} group
 */
module.exports.createGroup = function createGroup(group) {
  return db.groups.create({ data: group });
};

/**
 * @param {_Group} groupWhere
 */
module.exports.getGroupWhere = function getGroupWhere(groupWhere) {
  return db.groups.findMany({ where: groupWhere });
};

/**
 * @param {_Group} groupWhere
 */
module.exports.deleteGroup = function deleteGroup(groupWhere) {
  return db.groups.delete({ where: groupWhere });
};

/**
 * @param {_Group} groupSet
 * @param {_Group} groupWhere
 */
module.exports.updateGroupWhere = function updateGroupWhere (groupSet, groupWhere) {
  return db.groups.update({ where: groupWhere, data: groupSet });
};
