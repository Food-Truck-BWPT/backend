const db = require("../data/dbConfig.js");

module.exports = {
  addTruck,
  findTruck,
  getAllTrucks,
  addTruckUserRelationship,
  getAllFavorites,
};

async function addTruck(truck) {
  const [id] = await db("trucks").insert(truck, "id");
}

async function addTruckUserRelationship(truck) {
  const [id] = await db("users_trucks").insert(truck, "id");
}

function findTruck(id) {
  return db("trucks").where(id).orderBy("id");
}

function getAllTrucks() {
  return db("trucks");
}

function getAllFavorites() {
  return db("users_trucks");
}