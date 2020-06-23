const router = require("express").Router();

const Users = require("./users-model.js");

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

module.exports = router;
