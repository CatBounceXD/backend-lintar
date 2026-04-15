const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, 'ID User (mahasiswa) wajib diisi'] 
    },
    schedule: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Schedule', 
        required: [true, 'ID Jadwal wajib diisi'] 
    },
    date: { 
        type: Date, 
        default: Date.now,
        required: true 
    },
    status: { 
        type: String, 
        enum: ['Hadir', 'Izin', 'Alpa'], 
        required: [true, 'Status kehadiran wajib diisi'] 
    }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);