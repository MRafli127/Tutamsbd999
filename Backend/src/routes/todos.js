const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Create Todo
router.post('/', async (req, res) => {
  try {
    const todo = new Todo({
        title: req.query.title,
        description: req.query.description,
        time: req.query.time,
        date: req.query.date
      });
      
    const saved = await todo.save();
    res.status(201).json(saved);
    } catch (err) {
    res.status(500).json({ error: 'Gagal membuat Todo list' });
  }
});

// Get All Todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data' });
  }
});

// Get One
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data' });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengupdate Todo' });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo dihapus' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal menghapus Todo list' });
  }
});
module.exports = router;
