const db = require("./dbConnection.js");

function insertQuery(table, object) {
  var query = `Insert Into \`${db.DBName}\`.\`${table}\` `;
  var keys = "";
  var values = "";
  for (let key in object) {
    keys += `\`${key}\`, `;
    values += `'${object[key]}', `;
  }
  keys = keys.slice(0, keys.length - 2);
  values = values.slice(0, values.length - 2);

  query += `(${keys}) VALUES(${values})`;
  return query;
}

function convertWhereObjectToString(whereObject, suffix) {
  var where = "WHERE (";
  for (let key in whereObject) {
    if (whereObject[key] !== undefined) {
      where += `\`${key}\`='${whereObject[key]}' ${suffix} `; // example: `name`='ido' AND ...
    }
  }
  if (where.length > 7) {
    return where.slice(0, where.length - (suffix.length + 2)) + ")";
  }
  return "";
}

function selectAllWhereQuery(table, whereObject, whereOption) {
  var query = `SELECT * From \`${db.DBName}\`.\`${table}\` `;
  if (whereObject) {
    query += convertWhereObjectToString(whereObject, whereOption);
  }
  return query;
}

function selectAllWhereAndQuery(table, whereObject) {
  return selectAllWhereQuery(table, whereObject, "AND");
}

function selectAllWhereOrQuery(table, whereObject) {
  return selectAllWhereQuery(table, whereObject, "OR");
}

function deleteWhereQuery(table, whereObject, whereOption) {
  var query = `DELETE From \`${db.DBName}\`.\`${table}\` `;
  if (whereObject) {
    query += convertWhereObjectToString(whereObject, whereOption);
  }
  return query;
}

function deleteWhereAndQuery(table, whereObject) {
  return deleteWhereQuery(table, whereObject, "AND");
}

function deleteWhereOrQuery(table, whereObject) {
  return deleteWhereQuery(table, whereObject, "OR");
}

function updateWhereQuery(table, setObject, whereObject, whereOption) {
  var query = `UPDATE \`${db.DBName}\`.\`${table}\` SET `;
  for (let key in setObject) {
    if (setObject[key] !== undefined) {
      query += `\`${key}\`='${setObject[key]}', `; // example: 'key=value AND'
    }
  }
  query = query.slice(0, query.length - 2) + " ";
  if (whereObject) {
    query += convertWhereObjectToString(whereObject, whereOption);
  }
  return query;
}

function updateWhereAndQuery(table, setObject, whereObject) {
  return updateWhereQuery(table, setObject, whereObject, "AND");
}

function updateWhereOrQuery(table, setObject, whereObject) {
  return updateWhereQuery(table, setObject, whereObject, "OR");
}

module.exports.insertQuery = insertQuery;
module.exports.selectAllWhereAndQuery = selectAllWhereAndQuery;
module.exports.selectAllWhereOrQuery = selectAllWhereOrQuery;
module.exports.deleteWhereAndQuery = deleteWhereAndQuery;
module.exports.deleteWhereOrQuery = deleteWhereOrQuery;
module.exports.updateWhereAndQuery = updateWhereAndQuery;
module.exports.updateWhereOrQuery = updateWhereOrQuery;
