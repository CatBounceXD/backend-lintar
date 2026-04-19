const attendController = require('./attend-controller');

module.exports = (app) => {
  app.post('/attendances', attendController.create.bind(attendController));
  app.get('/attendances/schedule/:scheduleId', attendController.getBySchedule.bind(attendController));
};