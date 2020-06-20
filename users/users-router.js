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

// find user by id

module.exports = router;
