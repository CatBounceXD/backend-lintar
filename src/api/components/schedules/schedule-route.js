const scheduleController = require ('./schedule-controller')

module.exports = (app) => {
  
  app.get('/schedules', scheduleController.getAll);
  app.post('/schedules', scheduleController.create);
  app.get('/schedules/:id', scheduleController.getById);
  app.put('/schedules/:id', scheduleController.update);
  app.delete('/schedules/:id', scheduleController.delete);
};