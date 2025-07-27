const { DataTypes } = require('sequelize');
const  sequelize  = require('../config/sequelize');

const Category = sequelize.define(
  'Category',
  {
    id_categorie: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,    
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'Categorie',
    timestamps: false,
  },
);


module.exports = Category;