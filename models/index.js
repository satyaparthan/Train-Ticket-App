const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres');

const models = {};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

models.train = require('./train.js')(sequelize, Sequelize);
models.ticket = require('./ticket.js')(sequelize, Sequelize);

module.exports = models;