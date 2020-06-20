const db = require("../data/dbConfig.js");

module.exports = {
  findUser,
  getAllUsers,
  addUser,
};

function findUser(username) {
  return db("users").where(username).orderBy("id");
}

function getAllUsers() {
  return db("users");
}

async function addUser(user) {
  const [id] = await db("users").insert(user, "id");
}
