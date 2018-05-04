const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const db = require('./db/sequelize');
const {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/create', (req, res) => {
  req.body.password = jwt.sign(req.body.password, 'addingSomeSalt');
  User.create(req.body, {
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
});

app.get('/read', (req, res) => {
  User.findAll().then(users => {
    res.send(users);
  }).catch(error => {
    res.status(400).send({
      "status": "error",
      "message": "no users found",
      "code": 400,
      "error": error
    })
  })
});

app.put('/update/:id', (req, res) => {
  User.find({
    where: { id: req.params.id }
  }).then(userFound => {
    userFound.update(req.body).then(user => {
      res.send(user)
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
  })
});

app.delete('/delete/:id', (req, res) => {
  User.find({
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
  })
});

app.post('/login', (req, res) => {
  let token = jwt.sign(req.body.password, 'addingSomeSalt');
  User.find({
    where: {
      Username: req.body.username,
      password: token
    }
  }).then(userMatched => {
      res.header('x-auth', token).status(200).send({
        success: true,
        user: {first_name: userMatched.first_name, last_name: userMatched.last_name, email: userMatched.email, token}
      })
  }).catch(error => {
    res.status(401).send({success: false, error: 'Unauthorized user', code: 401})
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};