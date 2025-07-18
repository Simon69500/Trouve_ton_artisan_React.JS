const artisanService = require("../services/serviceArtisan");

exports.getArtisans = async(req, res) => {
    try {
        const artisans = await artisanService.getAllArtisan();
        res.json(artisans);
    } catch(error){
        res.status(500).json({message: 'Erreur serveur', error});
    }
};
