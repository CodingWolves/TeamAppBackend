const userService = require("./userService.js");

function getUser(req, res) {
  // console.log(`process is ${process.pid}`);
  if (req.query.error) return res.send(`${req.query.error}`);
  res.send(userService.users);
}

function getUserParamsUserId(req, res) {
  user = {
    userId: req.params.userId,
  };
  var result = userService.query(user);
  if (result.length == 0) res.redirect(`/user?error=no results`);
  res.send(result);
}

function postUserJoinGroup(req, res) {
  var user = req.body.user;
  var group = req.body.group;
  res.send(userService.joinGroup(user, group));
}

module.exports.getUser = getUser;
module.exports.getUserParamsUserId = getUserParamsUserId;
module.exports.postUserJoinGroup = postUserJoinGroup;
