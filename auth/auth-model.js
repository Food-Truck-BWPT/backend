const db = require('../data/dbConfig.js');

module.exports = {
    addUser,
    findUser,
    getAllUsers
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