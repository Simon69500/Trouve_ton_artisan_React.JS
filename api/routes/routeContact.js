const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contContact');

const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 3, 
  message: "Trop de messages envoyés. Réessayez plus tard."
});

router.post('/', contactLimiter, contactController.sendEmail);

module.exports = router; 