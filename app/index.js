const cluster = require("cluster");
const os = require("os");
const runExpressServer = require("./app.js");

process.env["MYSQL-HOST"] = "localhost";
process.env["MYSQL-USER"] = "root";
process.env["MYSQL-PASSWORD"] = "12345678";
process.env["MYSQL-DB"] = "teamapp";
process.env["MYSQL-PORT"] = 3306;

if (os.platform().startsWith("win")) {
  console.log("Server is on windows os, starting single worker...");
  runExpressServer();
} else {
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < os.cpus().length; i++) {
      cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    runExpressServer();
  }
}
