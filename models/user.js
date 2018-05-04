const db = require('../db/sequelize');

const User = db.sequelize.define('MOCK_DATA', {
    first_name: {
        type: db.Sequelize.STRING,
        validate: {
            notEmpty: true,
            isAlpha: true,
            len:[1,50]
        }
    },
    last_name: {
        type: db.Sequelize.STRING,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },
    email: {
        type: db.Sequelize.STRING,
        validate: {
            notEmpty: true,
            isEmail:true
        }
    },
    password: {
        type: db.Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    username: {
        type: db.Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    token: {
        type: db.Sequelize.STRING
    }
  }, {
    timestamps: false
  });

module.exports = User;