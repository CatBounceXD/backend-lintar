const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  sks: { type: Number, required: true },
  semester: { type: Number, required: true },
  fakultas: { 
    type: String, 
    enum: ['Teknik', 'Farmasi', 'Hukum', 'Ekonomi', 'MIPA'], 
    required: true 
  },
  link_dokumen: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);