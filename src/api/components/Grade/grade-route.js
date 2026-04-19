const gradeController = require('./grade-controller');

module.exports = (app) => {
  app.post('/grades', gradeController.create);
  app.get('/grades/student/:studentId', gradeController.getHistory);
};