const express = require("express");
const Joi = require("joi");
const session = require("express-session");
const cors = require("express-cors");

const appRoutes = require("./appRoutes.js");

const app = express();
app.use(
  session({
    secret: "1234",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(cors());
app.use(express.json()); // parses incoming request body to json object

app.get("/views", (req, res) => {
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  res.send(
    `you have viewed this page ${req.session.views} times since server reload`
  );
});

appRoutes(app);

const port = process.env.PORT || 3000;
module.exports = function runExpressServer() {
  app.listen(port, () =>
    console.log(`Process ${process.pid} is listening on port ${port}`)
  );
};
