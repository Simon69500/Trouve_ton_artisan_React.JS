const {Sequelize} = require('sequelize');
require ('dotenv').config();


// Connexion à la base de données MySQL
const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306 ,
        dialect: 'mysql',
    }
);

async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log('Connexion à la BDD réussite !');
    } catch(error){
        console.error('Impossible de se connecter à la BDD : ', error);
    }
}

testConnection();

module.exports = sequelize ;