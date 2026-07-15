const Memory = require("../models/memory.model");

const remember = (question, answer) => {

    return Memory.saveMemory(question, answer);

};

const recall = (question) => {

    return Memory.searchMemory(question);

};

const allMemory = () => {

    return Memory.getAllMemory();

};

module.exports = {

    remember,
    recall,
    allMemory

};