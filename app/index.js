const cluster = require("cluster");
const os = require("os");
const runExpressServer = require("./app.js");

if (os.platform().startsWith("win")) {
  console.log("Server is on windows os, starting single worker...");
  runExpressServer();
} else {
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < os.cpus().length; i++) {
      cluster.fork();
    }

    // eslint-disable-next-line no-unused-vars
    cluster.on("exit", (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    runExpressServer();
  }
}
