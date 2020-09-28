const groupService = require("./groupService.js");

module.exports.getGroup = function getGroup(req, res) {
  res.send(groupService.query(req.query));
};

module.exports.postGroup = function postGroup(req, res) {
  var result = groupService.add(req.body.group);
  if (result && result.error) {
    console.log(result);
    res.status(404).send(result.error.details[0].message);
    return;
  }
  res.send(result);
};
