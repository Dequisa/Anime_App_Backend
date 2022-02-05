const db = require('../db/config.js');

const fetchUserByName = async (username) => {
    try {
        const users = await db.one('SELECT * FROM  users WHERE username = $1', username);
        return users
    } catch (err) {
        console.log(err)
    }
}

const fetchUserById = async (user_id) => {
    try {
        const users = await db.one('SELECT * FROM  users WHERE user_id = $1', user_id);
        return users
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    fetchUserByName,
    fetchUserById
};