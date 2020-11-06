const {Group} = require("../models/Group.js");
const queryFactory = require("../db/queryFactory.js");
const db = require("../db/dbConnection.js");

const tableName = "groups";

/**
 *
 * @param {Group} group
 */
function addGroup(group) {
  return db.queryPromise(queryFactory.insertQuery(tableName, group));
}

/**
 *
 * @param {Group} groupWhere
 */
function getGroupWhereAnd(groupWhere) {
  return db.queryPromise(
    queryFactory.selectAllWhereAndQuery(tableName, groupWhere)
  );
}

/**
 *
 * @param {Group} groupWhere
 */
function getGroupWhereOr(groupWhere) {
  return db.queryPromise(
    queryFactory.selectAllWhereOrQuery(tableName, groupWhere)
  );
}

/**
 *
 * @param {Group} groupWhere
 */
function deleteGroup(groupWhere) {
  return db.queryPromise(
    queryFactory.deleteWhereAndQuery(tableName, groupWhere)
  );
}

/**
 *
 * @param {Group} groupSet
 * @param {Group} groupWhere
 */
function updateGroupWhereOr(groupSet, groupWhere) {
  return db.queryPromise(
    queryFactory.updateWhereOrQuery(tableName, groupSet, groupWhere)
  );
}

/**
 *
 * @param {Group} groupSet
 * @param {Group} groupWhere
 */
function updateGroupWhereAnd(groupSet, groupWhere) {
  return db.queryPromise(
    queryFactory.updateWhereAndQuery(tableName, groupSet, groupWhere)
  );
}

module.exports.addGroup = addGroup;

module.exports.getGroupWhereAnd = getGroupWhereAnd;
module.exports.getGroupWhereOr = getGroupWhereOr;

module.exports.deleteGroup = deleteGroup;

module.exports.updateGroupWhereOr = updateGroupWhereOr;
module.exports.updateGroupWhereAnd = updateGroupWhereAnd;
