const express = require('express');
const router = express.Router();
const Category = require('../models/category');


// Exemple de route GET
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    console.error('Erreur lors de la récupération des catégories:', err); // Affiche l'erreur dans la console
    res.status(500).json({ error: 'Erreur lors de la récupération des catégories', details: err.message });
  }
});

module.exports = router; 