const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contContact');
const checkToken = require('../middleware/checkToken');
const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 3, 
  message: "Trop de messages envoyés. Réessayez plus tard."
});

router.post('/send', contactLimiter, checkToken, contactController.sendEmail);

module.exports = router; 