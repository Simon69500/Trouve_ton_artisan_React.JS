const contactService = require('../services/servicesContact');

exports.sendEmail = async (req, res) => {
  try {
    const { nom, email, objet, message } = req.body;

    if (!nom || !email || !objet || !message) {
      return res.status(400).json({
        error: true,
        message: 'Tous les champs sont requis !'
      });
    }

    await contactService.sendMail({ nom, email, objet, message });

    res.status(200).json({
      success: true,
      message: 'Email envoyé avec succès !'
    });

  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);

    res.status(500).json({
      error: true,
      message: 'Erreur serveur, veuillez réessayer plus tard.'
    });
  }
};
