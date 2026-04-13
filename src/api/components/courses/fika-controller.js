const CourseService = require('./courses.service'); // error : nama directory salah dan service filenya tidak sama

class CourseController {
  async getCourses(req, res) {
    try {
      const courses = await CourseService.getAllCourses();
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createCourse(req, res) {
    try {
      const newCourse = await CourseService.createCourse(req.body);
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateCourse(req, res) {
    try {
      const updated = await CourseService.updateCourse(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteCourse(req, res) {
    try {
      await CourseService.deleteCourse(req.params.id);
      res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new CourseController();