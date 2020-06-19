const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const authRouter = require('../auth/auth-router.js');
const Users = require('../auth/auth-model.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Food Truck BWPT API!'})
})

server.get('/allUsers', (req, res) => {
    Users.getAllUsers().then(users => {
        res.status(200).json(users)
    }).catch(error => {
        console.log(error)
        res.status(500).json(error);
    })
})

module.exports = server;