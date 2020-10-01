const mysql = require("mysql");
const queryInterface = require("./QueryInterface.js");

// need to run this on mysql server `
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; flush privileges;

var pool = mysql.createPool({
  host: process.env["MYSQL-HOST"],
  user: process.env["MYSQL-USER"],
  password: process.env["MYSQL-PASSWORD"],
  database: process.env["MYSQL-DB"],
  port: process.env["MYSQL-PORT"],
});
console.log("connection pool created");

/**
 *
 * @param {queryInterface} query
 */
function queryPromise(query) {
  var callback = new Promise((resolve, reject) => {
    pool.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
  return callback;
}

module.exports.queryPromise = queryPromise;
