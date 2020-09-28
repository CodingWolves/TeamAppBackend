const searchUtils = require("../utils/searchUtils.js");
const { addGroupValidation } = require("./groupValidation.js");

module.exports.query = function (query) {
	return searchUtils.query(query,groups);
}

module.exports.add = (group) =>{
	var validation = addGroupValidation(group);
	if (validation.error){
		console.log(`Group ${JSON.stringify(group)} did not pass validation`);
		return validation;
	}
	groups.push(validation.value);
	console.log("add group to db");
	return "ok";
}

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
