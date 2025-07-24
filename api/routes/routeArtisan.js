const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/contArtisan');

router.get('/', artisanController.getArtisans);

router.get('/specialite', artisanController.getArtisansBySpecialite);

router.get('/:id', artisanController.getArtisanId);

module.exports = router;
