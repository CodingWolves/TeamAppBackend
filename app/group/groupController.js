const groupService = require("./groupService.js");

function getGroup(req, res) {
  res.send(groupService.query(req.query));
}

function postGroup(req, res) {
  var result = groupService.add(req.body.group);
  if (result && result.error) {
    console.log(result);
    res.status(404).send(result.error.details[0].message);
    return;
  }
  res.send(result);
}

module.exports.postGroup = postGroup;
module.exports.getGroup = getGroup;
