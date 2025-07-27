const {Sequelize} = require('sequelize');
require ('dotenv').config();


// Connexion à la base de données MySQL
const sequelize = new Sequelize (
    process.env.MYSQL_DATABASE,
    process.env.MYSQLUSER,
    process.env.MYSQL_ROOT_PASSWORD,
    {
        host: process.env.MYSQLHOST || 'localhost',
        port: Number(process.env.MYSQLPORT) || 3306 ,
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