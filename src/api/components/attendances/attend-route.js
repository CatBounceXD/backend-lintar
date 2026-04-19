const express = require('express');
const router = express.Router();

const attendanceController = require('./attend-controller');

router.post('/', attendanceController.create.bind(attendanceController));
router.get('/schedule/:scheduleId', attendanceController.getBySchedule.bind(attendanceController));

module.exports = router;