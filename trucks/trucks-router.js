const router = require("express").Router();

const bcrypt = require("bcryptjs");

const Trucks = require("./trucks-model.js");

// create new truck
router.post("/", async (req, res) => {
  const newTruck = req.body;

  try {
    const saved = await Trucks.addTruck(newTruck);
    res
      .status(201)
      .json({ message: `The ${newTruck.name} truck has been created` });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Truck not created..." });
  }
});

// get trucks
router.get("/", async (req, res) => {
  try {
    const allTrucks = await Trucks.getAllTrucks();
    res.status(200).json(allTrucks);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "No trucks found..." });
  }
});

// add truck favorite
router.post("/favorites", async (req, res) => {
  const favTruckDetails = req.body;

  try {
    const favoriteTrucks = await Trucks.addTruckUserRelationship(
      favTruckDetails
    );
    res.status(200).json(favoriteTrucks);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "No trucks found..." });
  }
});

// read truck favorites
router.get("/favorites", async (req, res) => {
  try {
    const allFavorites = await Trucks.getAllFavorites();
    res.status(200).json(allFavorites);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "No trucks found..." });
  }
});

module.exports = router;
