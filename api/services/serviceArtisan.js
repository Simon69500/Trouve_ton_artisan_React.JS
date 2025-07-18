  const Artisans = require("../models/artisan.js");

  exports.getAllArtisan = async () => {
    return await Artisans.findAll();
  };
