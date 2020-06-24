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
    res.status(201).json({
      message: `success`,
      username: `${newUser.username}`,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "User not created..." });
  }
});

// login user
router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  try {
    const foundUser = await Users.findUser({ username }).first();
    if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
      req.session.user = foundUser;
      res.status(200).json(foundUser);
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// logout user
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.send("Could not destroy the session...");
      } else {
        res.send("Goodbye...");
      }
    });
  } else {
    res.send();
  }
});

module.exports = router;
