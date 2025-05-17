
const Todo = require('./todoModel');

// PUT /todos/:id
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const todo = await Todo.findByIdAndUpdate(id, updates, { new: true });
        if (!todo) return res.status(404).json({ error: 'Todo not found' });
        return res.status(200).json(todo);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = updateTodo;





/*
exports.updateTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const todo = await Todo.findByIdAndUpdate(id, updates, { new: true });
      if (!todo) return res.status(404).json({ error: 'Todo not found' });
      return res.status(200).json(todo);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
  */