const createTodo = require('./createTodo');
const getTodos = require('./getTodos');
const updateTodo = require('./updateTodo');
const deleteTodo = require('./deleteTodo');


// centarlizing my end points
module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
};

