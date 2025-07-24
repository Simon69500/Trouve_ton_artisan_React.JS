const artisanService = require("../services/serviceArtisan");

exports.getArtisans = async(req, res) => {
    try {
        const artisans = await artisanService.getArtisanAll();

        if (!artisans) {
            res.status(400).json({message: 'Aucune artisan trouvé !'});
        }

        res.json(artisans);
    } catch(error){
        res.status(500).json({message: 'Erreur serveur', error});
    }
};

exports.getArtisanId = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("ID reçu dans la route :", id);

        const artisan = await artisanService.getArtisanById(id);

        if(!artisan) {
            return res.status(404).json({message: 'Aucun artisan trouvé !'});
        }

        res.json(artisan);

    } catch(error){
        res.status(500).json({message: 'Erreur serveur', error});
    }
};

exports.getArtisansByCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const artisans = await artisanService.getArtisanByCategory(id);

        if(!artisans || artisans.length === 0) {
            return res.status(404).json({message: 'Aucun artisan trouvé pour cette categorie !'});
        }
        res.json(artisans);

    } catch(error) {
        console.error("Erreur dans getArtisansByCategorie :", error);
        res.status(500).json({ message: "Erreur serveur", error });    
    }
};

exports.getArtisansBySpecialite = async (req, res) => {
    try {
        const { specialite } = req.query;
 
        if (!specialite) {
            return res.status(400).json({ message: 'Paramètre spécialité manquant.' });
        }
        const artisans = await artisanService.getArtisanBySpecialite(specialite);

    if (artisans.length === 0) {
      return res.status(404).json({ message: 'Aucun artisan trouvé pour cette spécialité !' });
    }

    res.json(artisans)

    } catch(error) {
        res.status(500).json({ message: "Erreur serveur", error });    
    }
};

exports.getTopArtisans = async (req, res) => {
    try {
        const topArtisans = await artisanService.fetchTopArtisans();
        res.json(topArtisans);
    } catch(error) {
        res.status(500).json({ message: "Erreur serveur", error });    
    }
};