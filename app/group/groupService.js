const { addGroupValidation } = require("./groupValidation.js");
const dummyDb = require("../db/dummyDb.js");
const { User } = require("../models/User.js");
const { Group } = require("../models/Group.js");
const groupDAO = require("./groupDAO.js");

/**
 *
 * @param {} query
 */
async function getGroupWhere(groupWhereClause) {
  var groupWhere = groupWhereClause;

  // if string clause extracts the keys and values and put them in the object groupWhere
  if (typeof groupWhere == "string") {
    var attrStrs = groupWhereClause.split(";");
    groupWhere = {};
    for (let attrStr in attrStrs) {
      var args = attrStr.split("=");
      groupWhere[args[0]] = args[1];
    }
  }

  return await groupDAO.getGroupWhereAnd(groupWhere);
}

/**
 *
 * @param {Group} group
 */
async function addGroup(group) {
  var validation = addGroupValidation(group);
  if (validation.error) {
    console.log(`Group ${group.subject} did not pass validation`);
    return validation;
  }

  var groupWhere = {
    id: group.id,
  };
  var dbGroup = await groupDAO.getGroupWhereOr(groupWhere);
  // searches for group in db

  if (dbGroup.length < 1) {
    var result = await groupDAO.addGroup(group);
    return result;
  } else {
    return {
      error: { details: [{ message: "group id already exists" }] },
    };
  }
}

/**
 *
 * @param {Group} group
 * @param {User} user
 */
function createGroup(group, user) {
  group.ownerId = user.email;
  let id = 1;
  while (dummyDb.studyGroups.reduce((r, g) => r || g.id === id, false)) {
    id++;
  }
  group.id = id;
  dummyDb.studyGroups.push(group);
  return group;
}

async function updateGroup(group) {
  var validation = addGroupValidation(group);
  if (validation.error) {
    console.log(`Group ${group.subject} did not pass validation at update`);
    return validation;
  }
  if (group.id === undefined) {
    return { error: { details: [{ message: "group has no id" }] } };
  }
  var groupWhere = { id: group.id };
  var dbGroup = await groupDAO.getGroupWhereAnd(groupWhere);
  if (dbGroup.length < 1) {
    return { error: { details: [{ message: "group does not exist" }] } };
  } else {
    return await groupDAO.updateGroupWhereAnd(group, groupWhere);
  }
}

function getGroupById(id) {
  for (let index in dummyDb.studyGroups) {
    let group = dummyDb.studyGroups[index];
    if (group.id === id) {
      return group;
    }
  }
  return { error: "group not found" };
}

/**
 *
 * @param {int} group
 * @param {User} user
 */
function userJoin(groupId, user) {
  const group = getGroupById(groupId);
  if (group.error) return group;
  group.participantsNumber++;
  return group;
}

function getAllGroups() {
  return dummyDb.studyGroups;
}

module.exports.addGroup = addGroup;
module.exports.getGroupWhere = getGroupWhere;
module.exports.updateGroup = updateGroup;
module.exports.createGroup = createGroup;
module.exports.getGroupById = getGroupById;
module.exports.userJoin = userJoin;
module.exports.getAllGroups = getAllGroups;
