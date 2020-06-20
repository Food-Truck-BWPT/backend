const db = require("../data/dbConfig.js");

module.exports = {
  addTruck,
  findTruck,
  getAllTrucks,
};

async function addTruck(truck) {
  const [id] = await db("trucks").insert(truck, "id");
}

function findTruck(id) {
  return db("trucks").where(id).orderBy("id");
}

function getAllTrucks() {
  return db("trucks");
}
