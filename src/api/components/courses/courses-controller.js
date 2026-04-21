const CourseService = require('./courses-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

class CourseController {
  async getCourses(req, res, next) {
    try {
      const courses = await CourseService.getAllCourses();
      return res.status(200).json(courses);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const course = await CourseService.getCourseById(req.params.id); 
      
      if (!course) {
        throw errorResponder(errorTypes.NOT_FOUND, 'Course tidak ditemukan');
      }
      
      return res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  async createCourse(req, res, next) {
    try {
      const newCourse = await CourseService.createCourse(req.body);
      
      if (!newCourse) {
        throw errorResponder(errorTypes.BAD_REQUEST, 'Course gagal dibuat');
      }

      return res.status(201).json(newCourse);
    } catch (error) {
      next(error);
    }
  }

  async updateCourse(req, res, next) {
    try {
      const updated = await CourseService.updateCourse(req.params.id, req.body);
      
      if (!updated) {
        throw errorResponder(errorTypes.NOT_FOUND, 'Course yang ingin diupdate tidak ditemukan');
      }

      return res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  }

  async deleteCourse(req, res, next) {
    try {
      const deleted = await CourseService.deleteCourse(req.params.id);
      
      if (!deleted) {
         throw errorResponder(errorTypes.NOT_FOUND, 'Course yang ingin dihapus tidak ditemukan');
      }

      return res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CourseController();