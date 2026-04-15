const CourseRepository = require('./courses-repository');

class CourseService {
  async getAllCourses() {
    return await CourseRepository.findAll();
  }

  async createCourse(data) {
    // Anda bisa menambahkan validasi bisnis tambahan di sini
    return await CourseRepository.create(data);
  }

  async updateCourse(id, data) {
    return await CourseRepository.update(id, data);
  }

  async deleteCourse(id) {
    return await CourseRepository.delete(id);
  }
}

module.exports = new CourseService();