# Snuuper-test
This project is made to obtein the postition back end developer at snuuper.

Test: 
* Implement an API using Node.js and Express.js
* Add CRUD over a given data base call MACK_DATA.
* The connection can be made using Sequelize or Bookshelf.
* Implement a user login functionality that returns a success true or false depending on the response, if success is true then it should return the user data: first_name, last_name, email and a JWT.
* API should be upload to a GIT repository with instructions to the correct local instanciation, it is recommended the use of Swagger for the vizualisation o services and test cases or it might as well be made with POSTMAN and then share the collection.


## Getting Started
### Installation

This project was made using Node.js version 9.8.0 which you need to install and you can find and download [here](https://nodejs.org/en/download/releases/).

After installing Node you should clone or download this repository into your local machine and open a terminal in the location of the project to initialize NPM with the following command:

```
npm install
```

This will automatically add a node_modules folder into the project and install every dependency you need for the project to work, this dependencies are configured on package.json.


## Running and testing the web server

Once NPM finish installing you can start the web server with the following command on the terminal:
```
node app.js
```
This command will start you web server on your [localhost:3000](localhost:3000).

Data Base is set up using RDS AWS and its connection properties are set on **./db/sequelize.js**, if you want to run this data base locally you can change the parameters of the connection:
```javascript
const dataBase = '';
const user = '';
const password = '';
const host =  '';
const port = '';
```

To test the web server you can refer to the [API Collection](https://documenter.getpostman.com/view/4276010/user/RW1ekxYf) on POSTMAN.

## Built With

* [Node.js](https://nodejs.org/en/)
* [Expres.js](http://expressjs.com/)
* [Sequelize](http://docs.sequelizejs.com/)


## Authors

* **Andrés Meneses** - [snuuper-test](https://github.com/brockoly)
