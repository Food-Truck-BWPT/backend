const db = require('../data/dbConfig.js');

module.exports = {
    addUser,
    findUser,
    getAllUsers,
    getAll
}

async function addUser(user) {
    const [id] = await db('users').insert(user, 'id')
}

function findUser(username) {
    return db('users').where(username).orderBy('id')
}

function getAllUsers() {
    return db('users')
}

function getAll() {
    // return db('users').select('users.id as userID', 'trucks.*')
    // .innerJoin('users_trucks', 'users.id', 'trucks.id')
    // .innerJoin('trucks', 'trucks.id', 'users_trucks.trucks_id')
}