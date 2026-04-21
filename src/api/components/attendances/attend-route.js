const attendController = require('./attend-controller');

module.exports = (app) => {
  app.post('/attendances', attendController.create);
  app.get('/attendances/schedule/:scheduleId', attendController.getBySchedule);
  app.get('/attendances/user/:userId', attendController.getByUser);
};