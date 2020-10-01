const searchUtils = require("../utils/searchUtils.js");
const { addGroupValidation } = require("./groupValidation.js");
const { queryPromise } = require("../db/db.js");
const GroupInterface = require("./GroupInterface.js");
const QueryInterface = require("../db/QueryInterface.js");

/**
 *
 * @param {QueryInterface} query
 */
function query(query) {
  queryPromise("INSERT INTO teamapp.groups (`id`) VALUES(2)")
    .then((results) => console.log("results", results))
    .catch((err) => console.log("error", err.sqlMessage));
  return searchUtils.query(query, groups);
}

/**
 *
 * @param {GroupInterface} group
 */
function add(group) {
  var validation = addGroupValidation(group);
  if (validation.error) {
    console.log(`Group ${JSON.stringify(group)} did not pass validation`);
    return validation;
  }
  groups.push(validation.value);
  console.log("add group to db");
  return "ok";
}



module.exports.add = add;
module.exports.query = query;



var groups = [
  {
    name: "making only fun",
    leader: "ido zahavy",
    subject: "computer hardware",
  },
  {
    name: "doign the job",
    leader: "carakukli",
    subject: "singing",
  },
  {
    name: "sometime we have to seat",
    leader: "sharkoon",
    subject: "car riding",
  },
  {
    name: "all together",
    leader: "chen amsalem",
    subject: "food making",
  },
];
