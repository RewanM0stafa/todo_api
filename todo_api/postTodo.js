const Todo = require('./todoModel');


// postTodo.js
const createTodo = async (req, res) => {
    try {
        const { task } = req.body;
        const todo = await Todo.create({ task });
        return res.status(201).json(todo);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = createTodo;  // يصدر الدالة مباشرة






/*
// POST /todos
exports.createTodo = async (req, res) => {
    try {
      const { task } = req.body;
      const todo = await Todo.create({ task });
      return res.status(201).json(todo);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
  */