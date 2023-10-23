const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = connection;