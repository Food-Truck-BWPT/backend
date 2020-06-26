const db = require("../data/dbConfig.js");

module.exports = {
  addTruck,
  findTruck,
  updateTruck,
  getAllTrucks,
  addTruckUserRelationship,
  getUsersFavorites,
  getAllFavorites,
  deleteTruck,
};

async function addTruck(truck) {
  const [id] = await db("trucks").insert(truck, "id");
}

async function addTruckUserRelationship(truck) {
  const [id] = await db("users_trucks").insert(truck, "id");
}

function findTruck(truck) {
  return db("trucks").where(truck).orderBy("id");
}

function getAllTrucks() {
  return db("trucks");
}

function getAllFavorites() {
  return db("users_trucks");
}

function getUsersFavorites(id) {
  return db("trucks").whereIn(
    "id",
    db("users_trucks").select("users_id").where("trucks_id", id)
  );
}

function updateTruck(id, changes) {
  return db("trucks")
    .where("id", id)
    .update(changes)
    .then((res) => console.log(res));
}

function deleteTruck(truckID) {
  return db("trucks").where("id", truckID).del();
}
