const GroupInterface = require("./GroupInterface.js");
const queryFactory = require("../db/queryFactory.js");
const db = require("../db/dbConnection.js");

const tableName = "groups";

/**
 *
 * @param {GroupInterface} group
 */
function addGroup(group) {
  return db.queryPromise(queryFactory.insertQuery(tableName, group));
}

/**
 *
 * @param {GroupInterface} groupWhere
 */
function getGroupWhereAnd(groupWhere) {
  return db.queryPromise(
    queryFactory.selectAllWhereAndQuery(tableName, groupWhere)
  );
}

/**
 *
 * @param {GroupInterface} groupWhere
 */
function getGroupWhereOr(groupWhere) {
  return db.queryPromise(
    queryFactory.selectAllWhereOrQuery(tableName, groupWhere)
  );
}

/**
 *
 * @param {GroupInterface} groupWhere
 */
function deleteGroup(groupWhere) {
  return db.queryPromise(
    queryFactory.deleteWhereAndQuery(tableName, groupWhere)
  );
}

/**
 *
 * @param {GroupInterface} groupSet
 * @param {GroupInterface} groupWhere
 */
function updateGroupWhereOr(groupSet, groupWhere) {
  return db.queryPromise(
    queryFactory.updateWhereOrQuery(tableName, groupSet, groupWhere)
  );
}

/**
 *
 * @param {GroupInterface} groupSet
 * @param {GroupInterface} groupWhere
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
