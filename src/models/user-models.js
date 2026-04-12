const mongoose = require('mongoose');

const userModel = new mongoose.Model({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['mahasiswa', 'dosen'],
    default: 'mahasiswa',
    required: true,
  }
});

module.exports = mongoose.model('User', userModel);