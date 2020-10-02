const groupService = require("./groupService.js");
const express = require("express");

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function getGroup(req, res) {
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
async function postGroup(req, res) {
  var result = await groupService.addGroup(req.body.group);
  console.log(result);
  if (result && result.error) {
    res.status(404).send(result.error.details[0].message);
    return;
  }
  res.send(result);
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
    res.status(404).send("group was not found in body");
  }
}

module.exports.postGroup = postGroup;
module.exports.getGroup = getGroup;
module.exports.updateGroup = updateGroup;
