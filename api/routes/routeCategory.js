const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/contCategory');
const artisanController = require('../controllers/contArtisan');

router.get('/', categoryController.getCategorys);

router.get('/:id', categoryController.getCategoryId);

router.get('/:id/artisans', artisanController.getArtisansByCategory);


module.exports = router; 