const attendanceRepository = require('./attend-repository');

class AttendanceService {
  async recordAttendance(data) {
    const { user, schedule, status } = data;
    const attendanceDate = data.date ? new Date(data.date) : new Date();

    const isDuplicate = await attendanceRepository.findDuplicate(user, schedule, attendanceDate);
    if (isDuplicate)
      throw new Error('Mahasiswa ini sudah melakukan absensi untuk jadwal tersebut pada hari ini.');

    const newAttendance = { user, schedule, date: attendanceDate, status};

    return await attendanceRepository.createAttendance(newAttendance);
  }

async getUserAttendances(userId) {
    if (!userId) {
      throw new Error('ID Mahasiswa tidak valid.');
    }
    
    const rawAttendances = await attendanceRepository.findAttendancesByUser(userId);

    const formattedData = rawAttendances.map((absen) => {
      const matkul = absen.schedule?.course;
      const jadwal = absen.schedule;
      return {
        id_absen: absen._id,
        mata_kuliah: matkul?.nama || 'Unknown Matkul',
        sks: matkul?.sks || 0,
        tanggal: absen.date,
        hari: jadwal?.hari || '-',
        waktu: `${jadwal?.jam_mulai || '-'} s/d ${jadwal?.jam_selesai || '-'}`,
        ruangan: jadwal?.ruangan || '-',
        status: absen.status
      };
    });
    return formattedData;
  }

  async getScheduleAttendances(scheduleId) {
    if (!scheduleId)
      throw new Error('ID Jadwal tidak valid.');
    
    return await attendanceRepository.findAttendancesBySchedule(scheduleId);
  }
}

module.exports = new AttendanceService();