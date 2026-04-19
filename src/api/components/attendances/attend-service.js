const attendanceRepository = require('./attend-repository');

class AttendanceService {
  async recordAttendance(data) {
    const { user, schedule, status } = data;
    const attendanceDate = data.date ? new Date(data.date) : new Date();

    const isDuplicate = await attendanceRepository.findDuplicate(user, schedule, attendanceDate);
    if (isDuplicate) {
      throw new Error('Mahasiswa ini sudah melakukan absensi untuk jadwal tersebut pada hari ini.');
    }

    const newAttendance = {
      user,
      schedule,
      date: attendanceDate,
      status
    };

    return await attendanceRepository.createAttendance(newAttendance);
  }

  async getScheduleAttendances(scheduleId) {
    if (!scheduleId) {
      throw new Error('ID Jadwal tidak valid.');
    }
    return await attendanceRepository.findAttendancesBySchedule(scheduleId);
  }
}

module.exports = new AttendanceService();