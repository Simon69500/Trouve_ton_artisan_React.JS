const { Sequelize } = require('sequelize');

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.local';
require('dotenv').config(); // j'ai enlever cette partie dans confing({ path: envFile })


// Configuration Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,  //     port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    logging: false  // ajouter pour eviter trop logs
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la BDD réussite !');
  } catch (error) {
    console.error('Impossible de se connecter à la BDD : ', error);
  }
}

testConnection();

const express = require('express');
const app = express();

module.exports = sequelize;
