const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/contArtisan');

router.get('/', artisanController.getArtisans);

router.get('/:id')

module.exports = router;
