
const Todo = require('../models/Todo');

// PUT /todos/:id
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
  