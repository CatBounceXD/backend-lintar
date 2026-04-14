const Schedule = require('../models/schedule.model');

class ScheduleRepository {
  async findAll() {
    return await Schedule.find().populate('course user');
  }

  async findById(id) {
    return await Schedule.findById(id).populate('course user');
  }

  async create(data) {
    return await Schedule.create(data);
  }

  async update(id, data) {
    return await Schedule.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Schedule.findByIdAndDelete(id);
  }
}

module.exports = new ScheduleRepository();