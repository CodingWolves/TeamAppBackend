const express = require("express");
const cookieParser = require("cookie-parser");
const http = require("http");
const https = require("https");
const session = require("express-session");
const cors = require("cors");
const MongoDBStore = require("connect-mongodb-session")(session);
const redis = require("redis");

let store = new session.MemoryStore();

if (process.env["REDIS_OFF"] === false) {
  const RedisStore = require("connect-redis")(session);
  let redisClient = redis.createClient();
  redisClient.on("error", console.error);

  store = new RedisStore({client: redisClient});
  // const store = new MongoDBStore({
  //   // connects to 'TeamApp' DB in mongo and collection 'sessions'
  //   uri: "mongodb://localhost:27017/TeamApp",
  //   collection: "sessions",
  // });
  store.on("error", console.error);
}

const appRoutes = require("./appRoutes.js");
const {env} = require("process");

const app = express();
app.use(
  session({
    secret: "1234",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 3600000, // one hour
      sameSite: true,
      signed: true,
      httpOnly: true,
    },
    store: store,
  })
);
app.use(cors({credentials: true, origin: ["http://localhost:8000"]}));
app.use(cookieParser("secret"));
app.use((req, res, next) => {
  res.myCookie = (name, val) => {
    return res.cookie(name, val, {
      domain: "localhost",
      secure: false,
      // maxAge: 3600000, // one hour
      sameSite: true,
      signed: true,
      httpOnly: true,
    });
  };
  next();
});
app.use(express.json({limit: "50mb"})); // parses incoming request json body

app.get("/views", (req, res) => {
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  // req.session.cookie.maxAge = 60 * 1000;
  console.log(`Process ${process.pid}`);
  res.send(`you have viewed this page ${req.session.views} times since sessions cleared`);
});

appRoutes(app);

const httpPort = process.env.PORT || 3000;
// const httpsPort = process.env.HTTPS_PORT || 3001;
// const httpsCredentials = {
//   key: "",
//   cert: "",
// };

module.exports = function runExpressServer() {
  const httpServer = http.createServer(app);
  // const httpsServer = https.createServer(httpsCredentials, app);

  httpServer.listen(httpPort, () => console.log(`Process ${process.pid} is http listening on port ${httpPort}`));
  // httpsServer.listen(httpsPort, () =>
  //   console.log(`Process ${process.pid} is http listening on port ${httpsPort}`)
  // );
};
