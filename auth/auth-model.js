const db = require("../data/dbConfig.js");

module.exports = {
  addUser,
};

async function addUser(user) {
  const [id] = await db("users").insert(user, "id");
}
