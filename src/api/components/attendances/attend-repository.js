const Attendance = require('../../../models/attend-model');

class AttendanceRepository {
    async createAttendance(data) {
        const attendance = new Attendance(data);
        return await attendance.save();
    }

    async findAttendancesBySchedule(scheduleId) {
        return await Attendance.find({ schedule: scheduleId })
            //Detail mahasiswa
            .populate('user', 'name nim') 
            //Detail jadwal kuloah
            .populate('schedule', 'courseName time')
            .sort({ date: -1 }); 
    }
}

module.exports = new AttendanceRepository();