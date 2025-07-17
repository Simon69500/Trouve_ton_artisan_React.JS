const {Sequelize} = require('sequelize');


// Connexion à la base de données MySQL
const sequelize = new Sequelize ('artisan', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log('Connexion à la BDD réussite !');
    } catch(error){
        console.error('Impossible de se connecter à la BDD : ', error);
    }
}

testConnection();

module.exports = { sequelize };