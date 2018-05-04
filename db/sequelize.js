const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('snuuper', 'snuuperuser', '12345678', {
  host: 'snuuper.cue74bh067lo.sa-east-1.rds.amazonaws.com',
  port: '1433',
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