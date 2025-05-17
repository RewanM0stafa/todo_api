const createTodo = require('./postTodo');
const getTodos = require('./getTodo');
const updateTodo = require('./updateTodo');
const deleteTodo = require('./deleteTodo');


// centarlizing my end points
module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
};

