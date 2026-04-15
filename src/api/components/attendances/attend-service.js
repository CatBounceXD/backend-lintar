const attendanceRepository = require('./attend-repository');

class AttendanceService {
    async recordAttendance(data) {
        // Logika bisnis bisa ditambahkan di sini.
        // Contoh: Validasi jika mahasiswa sudah melakukan absen pada jadwal ini hari ini.
        // const existing = await attendanceRepository.checkExisting(...);
        // if(existing) throw new Error('Mahasiswa sudah absen');

        return await attendanceRepository.createAttendance(data);
    }

    async getAttendancesBySchedule(scheduleId) {
        if (!scheduleId) {
            throw new Error('ID Jadwal tidak valid');
        }
        return await attendanceRepository.findAttendancesBySchedule(scheduleId);
    }
}

module.exports = new AttendanceService();