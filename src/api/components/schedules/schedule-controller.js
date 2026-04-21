const ScheduleService = require('./schedule-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

class ScheduleController {
  async getAll(req, res, next) {
    try {
      const data = await ScheduleService.getAllSchedules();
      
      if (!data || data.length === 0) {
        throw errorResponder(errorTypes.NOT_FOUND, 'Jadwal tidak bisa didapatkan');
      }
      
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const data = await ScheduleService.createSchedule(req.body);
      
      if (!data) {
        throw errorResponder(errorTypes.BAD_REQUEST, 'Jadwal tidak bisa dibuat');
      }
      
      return res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const data = await ScheduleService.getScheduleById(req.params.id);
      
      if (!data) {
        throw errorResponder(errorTypes.NOT_FOUND, 'Jadwal tidak ditemukan');
      }
      
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const data = await ScheduleService.updateSchedule(req.params.id, req.body);
      
      if (!data) {
        throw errorResponder(errorTypes.NOT_FOUND, 'Jadwal yang ingin diupdate tidak ditemukan');
      }

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      // Perbaikan: tampung ke dalam variabel untuk dicek apakah datanya ada
      const deletedSchedule = await ScheduleService.deleteSchedule(req.params.id);

      if (!deletedSchedule) {
        throw errorResponder(errorTypes.NOT_FOUND, 'Jadwal yang ingin dihapus tidak ada');
      }

      return res.status(200).json({ message: 'Jadwal dihapus' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ScheduleController();