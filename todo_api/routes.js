const express = require('express');
const router = express.Router();
const {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
} = require('./index');


router.post('/todos', createTodo);
router.get('/todos', getTodos);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

module.exports = router;
