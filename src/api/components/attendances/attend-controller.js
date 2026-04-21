const attendanceService = require('./attend-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

class AttendanceController {
    async create(req, res, next) {
        try {
            const { user, schedule, date, status } = req.body;
            
            const result = await attendanceService.recordAttendance({
                user,
                schedule,
                date,
                status
            });

            if (!result) {
                throw errorResponder(errorTypes.BAD_REQUEST, 'Gagal mencatat Absen');
            }

            return res.status(201).json({
                success: true,
                message: 'Absensi berhasil dicatat',
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

    async getBySchedule(req, res, next) {
        try {
            const { scheduleId } = req.params;
            const results = await attendanceService.getScheduleAttendances(scheduleId);

            if (!results || results.length === 0) {
                throw errorResponder(errorTypes.NOT_FOUND, 'Data absensi jadwal tidak ditemukan');
            }

            return res.status(200).json({
                success: true,
                count: results.length,
                data: results
            });
        } catch (error) {
            next(error);
        }
    }

    async getByUser(req, res, next) {
        try {
            const { userId } = req.params;
            const results = await attendanceService.getUserAttendances(userId);

            if (!results || results.length === 0) {
                throw errorResponder(errorTypes.NOT_FOUND, 'Data absensi mahasiswa tidak ditemukan');
            }

            return res.status(200).json({
                success: true,
                count: results.length,
                data: results
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AttendanceController();