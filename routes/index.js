const User = require('../controllers/user');

module.exports = (app) => {
  app.get('/read', User.read);
  app.post('/create', User.create);
  app.put('/update/:id', User.update);
  app.delete('/delete/:id', User.delete);
  app.post('/login', User.login);
  app.all('/', (req, res) => res.status(200).send({
    message: 'Welcome to Snuuper API!',
  }));
};