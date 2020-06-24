const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const trucksRouter = require("../trucks/trucks-router.js");

const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);

const sessionConfig = {
  name: "auth",
  secret: "super secret",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.SESSION,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
  store: new knexSessionStore({
    knex: require("../data/dbConfig.js"),
    tablename: "sessions",
    sidfieldname: "sessionID",
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  }),
};

server.use(session(sessionConfig));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/trucks", trucksRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Food Truck BWPT API!" });
});

module.exports = server;
