const contactService = require('../services/servicesContact');

exports.sendEmail = async (req, res) => {
    try {
        const {nom, email, objet, message} = req.body ;

        if(!nom || !email || !objet || !message) {
            return res.status(400).json({message: 'Tous les champs sont requis !'});
        }

        await contactService.sendMail({ nom, email,objet, message})
        res.status(200).json({message: 'Email envoyé avec succés !'})
    } catch(error) {
        res.status(500).json({message: 'Erreur serveur', error});
    }
};