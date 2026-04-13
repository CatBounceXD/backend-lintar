const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  nilai_uts: { type: Number, default: 0 },
  nilai_uas: { type: Number, default: 0 },
  nilai_akhir: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Grade', gradeSchema);
