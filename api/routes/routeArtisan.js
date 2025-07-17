const express = require('express');
const router = express.Router();
const Artisan = require('../models/artisan');


// Exemple de route GET
router.get('/', async (req, res) => {
  try {
    const artisans = await Artisan.findAll();
    res.json(artisans);
  } catch (err) {
    console.error('Erreur lors de la récupération des artisans:', err); // Affiche l'erreur dans la console
    res.status(500).json({ error: 'Erreur lors de la récupération des artisans', details: err.message });
  }
});

module.exports = router; 