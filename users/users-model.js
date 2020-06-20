const db = require("../data/dbConfig.js");

module.exports = {
  findUser,
  getAllUsers,
};

function findUser(id) {
  return db("users").where(id).orderBy("id");
}

function getAllUsers() {
  return db("users");
}
