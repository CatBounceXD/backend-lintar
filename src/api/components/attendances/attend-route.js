const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance.controller'); // error : nama directory salah dan service filenya tidak sama

// Endpoint untuk melakukan absen
router.post('/', attendanceController.create.bind(attendanceController));

// Endpoint untuk melihat daftar absensi di satu jadwal tertentu
router.get('/schedule/:scheduleId', attendanceController.getBySchedule.bind(attendanceController));

module.exports = router;