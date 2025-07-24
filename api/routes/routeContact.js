const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contContact');

router.post('/send', contactController.sendEmail);