const jwt = require('jsonwebtoken');

module.exports = {
  createToken(data){
    let user = data;
    return jwt.sign({ id: user }, 'addingSomeSalt', { expiresIn: '7d' }).toString();
  }
};