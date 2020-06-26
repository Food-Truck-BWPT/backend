const router = require("express").Router();

const Trucks = require("./trucks-model.js");
const restricted = require("../auth/authenticate-middleware.js");

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

// find a truck by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const foundTruck = await Trucks.findTruck({ id }).first();
    res.status(200).json(foundTruck);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Truck not found..." });
  }
});

// create new truck
router.post("/", restricted, async (req, res) => {
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

// update a truck
router.put("/:id", restricted, async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updateTruck = await Trucks.updateTruck(id, updates);
    res.status(201).json({ message: `Truck ${id} updated` });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Truck not updated..." });
  }
});

module.exports = router;
