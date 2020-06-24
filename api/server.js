const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const trucksRouter = require("../trucks/trucks-router.js");

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
