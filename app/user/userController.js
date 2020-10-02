const userService = require("./userService.js");

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function getUser(req, res) {
  if (req.query.error) return res.send(`${req.query.error}`);
  res.send(userService.users);
}

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function getUserParamsUserId(req, res) {
  user = {
    userId: req.params.userId,
  };
  var result = userService.getUserWhereAnd(user);
  if (result.length == 0) res.redirect(`/user?error=no results`);
  res.send(result);
}

/**
 *
 * @param {express.request} req
 * @param {express.response} res
 */
function postUserJoinGroup(req, res) {
  var user = req.body.user;
  var group = req.body.group;
  res.send(userService.joinGroup(user, group));
}

module.exports.getUser = getUser;
module.exports.getUserParamsUserId = getUserParamsUserId;
module.exports.postUserJoinGroup = postUserJoinGroup;
