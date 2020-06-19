const router = require('express').Router();

const bcrypt = require('bcryptjs');

const Users = require('./auth-model.js');

// create new user
router.post('/register', async (req, res) => {
    const newUser = req.body;
    const hashedPass = bcrypt.hashSync(newUser.password, 12);
    newUser.password = hashedPass;

    try {
        const saved = await Users.addUser(newUser);
        res.status(201).json({ message: `User ${newUser.username} created`})
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: 'User not created...'})      
    }
})

// get users
router.get('/users', async (req, res) => {
    try {
        const allUsers = await Users.getAllUsers()
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Users not found...'})
       }
})

module.exports = router;