const router = require("express").Router();

const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

// create new user
router.post("/register", async (req, res) => {
  const newUser = req.body;
  const hashedPass = bcrypt.hashSync(newUser.password, 12);
  newUser.password = hashedPass;

  try {
    const saved = await Users.addUser(newUser);
    res.status(201).json({ message: `User ${newUser.username} created` });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "User not created..." });
  }
});

// login user
router.post("/login", async (req, res) => {
  console.log("/login post running");
});

module.exports = router;
