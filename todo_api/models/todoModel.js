const mongoose = require('mongoose'); // دي الداتا بيز بتاعتي هاخد منها مكان وهتعامل فيه مع بيانات التو دو
                                          // فيها نوعين من الداتا (string+bool)

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    done: { type: Boolean, default: false },
},{ timestamps: true });

module.exports = mongoose.model('Todo', todoSchema); // import todoSchema as Todo