const ScheduleService = require('./schedule-service');
const {errorResponder,errorTypes} = require ('../../../core/errors');

class ScheduleController {
  async getAll(req, res) {
    try {
      const data = await ScheduleService.getAllSchedules();
      res.status(200).json(data);

      if(!data){
        throw errorResponder(errorTypes.NOT_FOUND,'data tidak bisa didapatkan');
      }
    } catch (error) {
      next (error);
    }
  }

  async create(req, res) {
    try {
      const data = await ScheduleService.createSchedule(req.body);
      res.status(201).json(data);

      if(!data){
        throw errorResponder(errorTypes.BAD_REQUEST,'data tidak bisa dibuat');
      }
    } catch (error) {
      next (error);
    }
  }

  async getById(req, res) {
    try {
      const data = await ScheduleService.getScheduleById(req.params.id);
      res.status(200).json(data);

      if(!data){
        throw errorResponder(errorTypes.NOT_FOUND,'tidak ditemukan');
      }
    } catch (error) {
      next (error);
    }
  }

  async update(req, res) {
    try {
      const data = await ScheduleService.updateSchedule(req.params.id, req.body);
      res.status(200).json(data);
    } catch (error) {
      next (error);
    }
  }

  async delete(req, res) {
    try {
      await ScheduleService.deleteSchedule(req.params.id);
      res.status(200).json({ message: 'Schedule deleted successfully' });

      if(!data){
        throw errorResponder(errorTypes.NOT_FOUND,'data yang ingin dihapus tidak ada');
      }
    } catch (error) {
      next (error);
    }
  }
}

module.exports = new ScheduleController();