const router = require("express").Router();

const bcrypt = require("bcryptjs");

const Trucks = require("./trucks-model.js");

// create new truck
router.post("/addtruck", async (req, res) => {
  const newTruck = req.body;

  try {
    const saved = await Trucks.addTruck(newTruck);
    res
      .status(201)
      .json({ message: `The ${newTruck.truckName} truck has been created` });
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

module.exports = router;
