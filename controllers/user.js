const User = require('../models/user');
const auth = require('./auth');

module.exports = {
  create(req, res) {
    return User.create(req.body, {
      flieds: ['first_name', 'last_name', 'email', 'password', 'username']
    }).then(userResponse => {
      res.status(200).send({
        "status": "success",
        "message": "user created",
        "code": 200,
        "user": userResponse});
    }).catch(error => {
      res.status(400).send(error);
    });
  },
  read(req, res) {
   return User.findAll().then(users => {
      res.status(200).send(users);
    }).catch(error => {
      res.status(400).send({
        "status": "error",
        "message": "no users found",
        "code": 400,
        "error": error
      })
    })
  },
  update(req, res) {
    return User.find({
      where: { id: req.params.id }
    }).then(userFound => {
      userFound.update(req.body).then(user => {
        res.status(200).send(user)
      }).catch(error => {
        res.status(400).send({
          "status": "error",
          "message": "user not found",
          "code": 400,
          "error": error
        })
      })
    }).catch(error => {
      res.status(400).send({
        "status": "error",
        "message": "user not found",
        "code": 400,
        "error": error
      })
    });
  },
  delete(req, res) {
    return User.find({
      where: { id: req.params.id }
    }).then(userFound => {
      userFound.destroy().then(deletedUser => {
        res.status(200).send({
          "status": "success",
          "message": "user deleted",
          "code": 200,
          "user": deletedUser
        })
      })
    }).catch(error => {
      res.status(400).send({
        "status": "error",
        "message": "user not found",
        "code": 400,
        "error": error
      })
    });
  },
  login(req, res) {
    return User.find({
      where: {
        Username: req.body.username,
        password: req.body.password
      }
    }).then(userMatched => {
        token = auth.createToken(userMatched.id);
        userMatched.update({token: token}).then(user => {
          res.header('x-auth', token).status(200).send({
            success: true,
            user: {first_name: userMatched.first_name, last_name: userMatched.last_name, email: userMatched.email, token}
          })
        }).catch(error => {
          res.status(400).send({
            "status": "error",
            "message": "token was not correctly update",
            "code": 400,
            "error": error
          })
        });
    }).catch(error => {
      res.status(401).send({success: false, error: 'Unauthorized user', code: 401})
    });
  }
}