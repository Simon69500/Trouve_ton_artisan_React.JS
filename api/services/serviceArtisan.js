const { Op, fn, col, where } = require('sequelize');
const Artisans = require("../models/artisan.js");


  exports.getArtisanAll = async () => {
    return await Artisans.findAll();
  };

  exports.getArtisanById = async (id) => {
    return await Artisans.findOne({
      where: {id_artisan: id}
    });
  };

  exports.getArtisanByCategory = async (id_categorie) => {
    return await Artisans.findAll({
      where: {id_categorie: id_categorie}
    });
  };

  exports.getArtisanByNom = async (nom) => {
    return await Artisans.findAll({
      where: where(fn('LOWER', col('nom')), {
        [Op.like]: `%${nom.toLowerCase()}%`
      })
    });
  };

exports.fetchTopArtisans = async () => {
  return await Artisans.findAll({
    where: { top_artisan: true },
    order: [['note', 'DESC']],
    limit: 3
  });
};
