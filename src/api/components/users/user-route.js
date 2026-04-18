const usersController = require('./user-controller');

module.exports = (app) => {
  app.get('/users', usersController.getUsers);
  app.post('/users', usersController.createUser);
  app.post('/users/login', usersController.login);
  app.delete('/users/:id', usersController.deleteUser);
};