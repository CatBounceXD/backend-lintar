const courseController = require('./courses-controller');

module.exports = (app) => {
  app.get('/courses', courseController.getCourses);
  app.post('/courses', courseController.createCourse);
  app.get('/courses/:id', courseController.getById); // Tambahan untuk detail per ID
  app.put('/courses/:id', courseController.updateCourse);
  app.delete('/courses/:id', courseController.deleteCourse);
};