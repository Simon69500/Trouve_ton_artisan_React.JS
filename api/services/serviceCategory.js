const Category = require("../models/category");

exports.getCategoryAll = async () => {
    return await Category.findAll();
}

exports.getCategoryById = async (id) => {
    return await Category.findOne({
        where: {id_categorie: id}
    });
}