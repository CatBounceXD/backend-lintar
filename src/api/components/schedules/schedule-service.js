const ScheduleRepository = require('./schedule.repository');

class ScheduleService {
  async getAllSchedules() {
    return await ScheduleRepository.findAll();
  }

  async getScheduleById(id) {
    const schedule = await ScheduleRepository.findById(id);
    if (!schedule) throw new Error('Schedule not found');
    return schedule;
  }

  async createSchedule(data) {
    // Anda bisa menambahkan logika validasi di sini
    return await ScheduleRepository.create(data);
  }

  async updateSchedule(id, data) {
    return await ScheduleRepository.update(id, data);
  }

  async deleteSchedule(id) {
    return await ScheduleRepository.delete(id);
  }
}

module.exports = new ScheduleService();