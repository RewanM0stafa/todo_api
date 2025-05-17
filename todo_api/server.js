
const express = require("express"); // بستورد مكتبة الفريم
const app = express();
app.use(express.json()); // بيحول البيانات اللي بتيجي من الـ API من JSON لأوبجكت أقدر أتعامل معاها
//const port = process.env.PORT || 3000;

const mongoose = require("mongoose"); //  بستورد الداتا بيز، وأتصل بيها
mongoose.connect('mongodb://mongo:27017/todo_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));



const todoRoutes = require('./routes');
app.use('/', todoRoutes);


const port =  3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

















/*
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/todo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define the schema
const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    done: { type: Boolean, default: false }
});

// Create the model
const Todo = mongoose.model('Todo', todoSchema);

// 1️⃣ Create a todo
app.post('/todos', async (req, res) => {
    try {
        const { task } = req.body;
        const todo = new Todo({ task });
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 2️⃣ Get all todos
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json(todos);
});

// 3️⃣ Update a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.

 */