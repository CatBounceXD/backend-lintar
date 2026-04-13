const Attendance = require('../models/attendance.model');

class AttendanceRepository {
    async createAttendance(data) {
        const attendance = new Attendance(data);
        return await attendance.save();
    }

    async findAttendancesBySchedule(scheduleId) {
        return await Attendance.find({ schedule: scheduleId })
            // Mengambil detail mahasiswa (misal: nama dan nim)
            .populate('user', 'name nim') 
            // Mengambil detail jadwal (misal: nama mata kuliah)
            .populate('schedule', 'courseName time')
            .sort({ date: -1 }); // Urutkan dari yang terbaru
    }
}

module.exports = new AttendanceRepository();