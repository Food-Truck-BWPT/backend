const db = require("../data/dbConfig.js");

module.exports = {
  findUser,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
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

function updateUser(id, changes) {
  return db("users")
    .where("id", id)
    .update(changes)
    .then((res) => console.log(res));
}

function deleteUser(userID) {
  return db("users").where("id", userID).del();
}
