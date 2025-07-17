const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');
const Category = require('./category');

const Artisans = sequelize.define(
  'Artisan',
  {
    id_artisan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,    
    },
    id_categorie: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id_categorie',
        },    
    },
    site_web: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    top_artisan: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialite: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    note: {
        type: DataTypes.DECIMAL(5,1),
        allowNull: false,
    },
    ville: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    tableName: 'Artisan',
    timestamps: false,
  },
);


module.exports = Artisans;