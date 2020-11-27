const groupService = require("../services/groupService.js");
const _express = require("express");
const Group = require("../_models/Group.js");

/**
 * @param _express.request} req
 * @param _express.response} res
 */
module.exports.postCreateGroup = function postCreateGroup(req, res) {
  if (!req.body) return res.status(400).send({ error: "must have body" });
  if (!req.signedCookies || !req.signedCookies.user) { return res.status(400).send({ error: "must be logged in / signed user cookie error" }); }
  const user = req.signedCookies.user;
  const group = new Group();
  for (const key in group) {
    group[key] = req.body[key];
  }
  group.id = undefined;
  groupService
    .createGroup(group, user)
    .then((result) => {
      console.log(result);
      res.status(201).send(result);
    })
    .catch((err) => {
      console.log("controller err", err);
      res.status(400).send(err);
    });
};

/**
 * @param _express.request} req
 * @param _express.response} res
 */
module.exports.getGroupById = function getGroupById(req, res) {
  if (!("id" in req.params)) return res.status(400).send({ error: "must be number like '/group/3'" });
  const id = Number.parseFloat(req.params.id);
  console.log(Math);
  if (Number.isNaN(Number(id))) return res.status(400).send({ error: "must be number like '/group/3'" });
  groupService
    .getGroupById(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

/**
 * @param _express.request} req
 * @param _express.response} res
 */
module.exports.putJoinGroup = function putJoinGroup(req, res) {
  if (!req.signedCookies || !req.signedCookies.user) { return res.status(400).send("must sign in first / missing signed cookie"); }
  const user = req.signedCookies.user;
  if (!req.body || !req.body.groupId) return res.status(400).send("must have body with groupId");
  const groupId = req.body.groupId;
  groupService
    .userJoin(groupId, user)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};

/**
 * @param _express.request} req
 * @param _express.response} res
 */
module.exports.getAllGroups = function getAllGroups(req, res) {
  groupService
    .getAllGroups()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
