const {Sequelize} = require('sequelize');
require ('dotenv').config();

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);


// Connexion à la base de données MySQL
const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
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