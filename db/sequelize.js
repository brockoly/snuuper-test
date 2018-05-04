const Sequelize = require('sequelize');

const db = {};
const dataBase = 'snuuper';
const user = 'snuuperuser';
const password = '12345678';
const host =  'snuuper.cue74bh067lo.sa-east-1.rds.amazonaws.com';
const port = 1433;

const sequelize = new Sequelize(dataBase, user, password, {
  host: host,
  port: port,
  dialect: 'mssql',
  operatorsAliases: false,
  define: {
    defaultScope:{
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    }
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;