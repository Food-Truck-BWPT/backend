const router = require("express").Router();

const Users = require("./users-model.js");

const restricted = require("../auth/authenticate-middleware.js");

// get users
router.get("/", async (req, res) => {
  try {
    const allUsers = await Users.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Users not found..." });
  }
});

// find a user by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const foundUser = await Users.findUser({ id }).first();
    res.status(200).json(foundUser);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "User not found..." });
  }
});

// update a user
router.put("/:id", restricted, async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updateUser = await Users.updateUser(id, updates);
    res.status(201).json({ message: `User ${id} updated` });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "User not updated..." });
  }
});

// delete a user
router.delete("/:id", restricted, async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await Users.deleteUser(id);
    res.status(201).json({ message: `User ${id} deleted` });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "User not deleted" });
  }
});

module.exports = router;
