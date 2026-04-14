const ScheduleService = require('../services/schedule.service');

class ScheduleController {
  async getAll(req, res) {
    try {
      const data = await ScheduleService.getAllSchedules();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const data = await ScheduleService.createSchedule(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const data = await ScheduleService.getScheduleById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const data = await ScheduleService.updateSchedule(req.params.id, req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      await ScheduleService.deleteSchedule(req.params.id);
      res.status(200).json({ message: 'Schedule deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new ScheduleController();