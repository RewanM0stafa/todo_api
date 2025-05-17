const Todo = require('./todoModel');



const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json(todos);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = getTodos;  // التصدير المباشر







/*
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
