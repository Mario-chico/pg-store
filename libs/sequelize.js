const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

const setupModels = require('../db/models')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
});

// Corremos setupModels despues de la creacion de instacia
setupModels(sequelize);

// Con esto lee el modelo configurado y sabe como crear la tabla
sequelize.sync();
module.exports = sequelize;