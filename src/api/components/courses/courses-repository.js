const Course = require('../../../models/courses-models');

class CourseRepository {
  async findAll() {
    return await Course.find();
  }

  async findById(id) {
    return await Course.findById(id);
  }

  async create(data) {
    return await Course.create(data);
  }

  async update(id, data) {
    return await Course.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Course.findByIdAndDelete(id);
  }
}

module.exports = new CourseRepository();