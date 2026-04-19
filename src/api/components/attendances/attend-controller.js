const attendanceService = require('./attend-service');
const {errorResponder,errorTypes} = require('../../../core/errors');

class AttendanceController {
    async create(req, res) {
        try {
            const { user, schedule, date, status } = req.body;
            
            const result = await attendanceService.recordAttendance({
                user,
                schedule,
                date,
                status
            });

            return res.status(201).json({
                success: true,
                message: 'Absensi berhasil dicatat',
                data: result
            });
        } catch (error) {
            throw errorResponder (errorTypes.INVALID_CREDENTIALS,'Absensi tidak berhasil dicatat');
        }
    }

    async getBySchedule(req, res) {
        try {
            const { scheduleId } = req.params;
            const results = await attendanceService.getAttendancesBySchedule(scheduleId);

            return res.status(200).json({
                success: true,
                count: results.length,
                data: results
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message || 'Gagal mengambil data absensi'
            });
        }
    }
}

module.exports = new AttendanceController();