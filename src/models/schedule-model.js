const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  course: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  
  hari: { type: String, required: true },
  jam_mulai: { type: String, required: true },
  jam_selesai: { type: String, required: true },
  ruangan: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Schedule', scheduleSchema);