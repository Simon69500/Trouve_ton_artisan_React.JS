const { Op, fn, col, where } = require('sequelize');
const db = require('../config/db.js');
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

  exports.getArtisanBySpecialite = async (specialite) => {
    return await Artisans.findAll({
      where: where(fn('LOWER', col('specialite')), {
        [Op.like]: `%${specialite.toLowerCase()}%`
      })
    });
  };

  exports.fetchTopArtisans = () => {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT * FROM artisan
        WHERE top_artisan = true
        ORDER BY note DESC
        LIMIT 3;
      `;
      db.query(sql, (err, results) => {
        if(err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  };