const express = require('express');
const router = express.Router();
const Character = require('../models/Characters');

// Get all Routes
router.get('/', async (req, res) => {
    const characters = await Character.find();
    res.json(characters);
});

// Create a new Character
router.post('/new', async (req, res) => {
    const newCharacter = new Character(req.body);
    const savedCharacter = await newCharacter.save();
    res.json(savedCharacter);
});

// Get Character by Name 
router.get('/get/:id', async (req, res) => {
    const c = await Character.findById({ _id: req.params.id });
    res.json(c);
});

// Delete a Character
router.delete('/delete/:id', async (req, res) => {
    const result = await Character.findByIdAndDelete({ _id: req.params.id});
    res.json(result);
});

// Update a Character by ID
router.patch('/update/:id', async (req, res) => {
    const c = await Character.updateOne({ _id: req.params.id }, { $set: req.body});
    res.json(c);
});

module.exports = router;