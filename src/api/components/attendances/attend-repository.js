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

    async findDuplicate(user, schedule, date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return await Attendance.findOne({
        user: user,
        schedule: schedule,
        date: { $gte: startOfDay, $lte: endOfDay }
    });
}
}

module.exports = new AttendanceRepository();