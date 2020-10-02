const db = require("./dbConnection.js");

function createTableGroups() {
  var query =
    `CREATE TABLE \`${db.DBName}\`.\`groups\` (` +
    "`id` int(11) NOT NULL," +
    "`subjectType` varchar(45) DEFAULT NULL," +
    "`subject` varchar(45) DEFAULT NULL," +
    "`institution` varchar(45) DEFAULT NULL," +
    "`studyTogether` tinyint(4) DEFAULT NULL," +
    "`where` varchar(45) DEFAULT NULL," +
    "`NumberOfParicipants` int(11) DEFAULT NULL," +
    "`description` text," +
    "`timeRanges` json DEFAULT NULL," +
    "`howLong` varchar(45) DEFAULT NULL," +
    "`ownerId` int(11) DEFAULT NULL," +
    "PRIMARY KEY (`id`)" +
    ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;";
  return db.queryPromise(query);
}

function dropTableGroups() {
	return db.queryPromise(`DROP TABLE \`${db.DBName}\`.\`groups\``).catch(console.log("the database already dropped"));
}

module.exports.createTableGroups = createTableGroups;
module.exports.dropTableGroups = dropTableGroups;
