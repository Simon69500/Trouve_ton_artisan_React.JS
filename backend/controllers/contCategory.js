const categoryService = require("../services/serviceCategory");

exports.getCategorys = async(req, res) => {
    try {
        const category = await categoryService.getCategoryAll();

        if (!category) {
            res.status(400).json({message: 'Aucune categories trouvé !'});
        }

        res.json(category);

    } catch(error){
        res.status(500).json({message: 'Erreur serveur', error});
    }
};

exports.getCategoryId = async(req, res) => {
    try {
        const id = req.params.id
        const category = await categoryService.getCategoryById(id);

        if (!category) {
            res.status(400).json({message: 'Aucune categories trouvé !'});
        }

        res.json(category);

    } catch(error){
        res.status(500).json({message: 'Erreur serveur', error});
    }
};