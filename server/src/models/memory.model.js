const db = require("../database/database");

const saveMemory = (question, answer) => {

    return db.prepare(`
        INSERT INTO memory
        (question, answer)
        VALUES (?,?)
    `).run(question, answer);

};

const getAllMemory = () => {

    return db.prepare(`
        SELECT *
        FROM memory
        ORDER BY id DESC
    `).all();

};

const searchMemory = (question) => {

    return db.prepare(`
        SELECT *
        FROM memory
        WHERE question LIKE ?
        LIMIT 1
    `).get(`%${question}%`);

};

module.exports = {

    saveMemory,
    getAllMemory,
    searchMemory

};