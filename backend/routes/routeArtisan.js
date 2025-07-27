const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/contArtisan');

router.get('/nom', artisanController.getArtisansByNom);

router.get('/top', artisanController.getTopArtisans);

router.get('/:id', artisanController.getArtisanId);

router.get('/', artisanController.getArtisans);

module.exports = router;