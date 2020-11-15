const groupService = require("./groupService.js");
const express = require("express");

const { Group } = require("../models/Group.js");
const { string } = require("joi");

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function getGroupByQuery(req, res) {
  groupService
    .getGroupWhere(req.query)
    .then((value) => res.send(value))
    .catch((err) => res.status(404).send(err));
}

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function updateGroup(req, res) {
  if (req.body.group) {
    groupService
      .updateGroup(req.body.group)
      .then((result) => res.send(result))
      .catch((err) => res.status(404).send(err));
  } else {
    res.status(404).send({ error: "group was not found in body" });
  }
}

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function postCreateGroup(req, res) {
  if (!req.body) return res.status(400).send({ error: "must have body" });
  if (!req.signedCookies || !req.signedCookies.user)
    return res.status(400).send({ error: "must be logged in / signed user cookie error" });
  const user = req.signedCookies.user;
  let group = new Group();
  for (let key in group) {
    group[key] = req.body[key];
  }
  group = groupService.createGroup(group, user);
  res.status(201).send(group);
}

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function getGroupById(req, res) {
  if (!"id" in req.params) return res.status(400).send({ error: "must be number like '/group/3'" });
  const id = Number.parseFloat(req.params["id"]);
  if (id === NaN) return res.status(400).send({ error: "must be number like '/group/3'" });
  const group = groupService.getGroupById(id);
  res.status(group.error ? 400 : 200).send(group);
}

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function putJoinGroup(req, res) {
  if (!req.signedCookies || !req.signedCookies.user)
    return res.status(400).send("must sign in first / missing signed cookie");
  const user = req.signedCookies.user;
  if (!req.body || !req.body.groupId) return res.status(400).send("must have body with groupId");
  const groupId = req.body.groupId;
  group = groupService.userJoin(groupId, user);
  if (group.error) return res.status(400).send(group);
  res.status(200).send(group);
}

function getAllGroups(req, res) {
  res.send(groupService.getAllGroups());
}

module.exports.getGroupByQuery = getGroupByQuery;
module.exports.updateGroup = updateGroup;
module.exports.postCreateGroup = postCreateGroup;
module.exports.getGroupById = getGroupById;
module.exports.putJoinGroup = putJoinGroup;
module.exports.getAllGroups = getAllGroups;
