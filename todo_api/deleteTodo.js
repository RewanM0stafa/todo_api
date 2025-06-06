const Todo = require('./todoModel');


// DELETE /todos/:id
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) return res.status(404).json({ error: 'Todo not found' });
        return res.status(204).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = deleteTodo;




/*
exports.deleteTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findByIdAndDelete(id);
      if (!todo) return res.status(404).json({ error: 'Todo not found' });
      return res.status(204).json({ message: 'Todo deleted successfully' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };


 */