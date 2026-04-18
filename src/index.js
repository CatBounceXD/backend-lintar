require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');

const app = require('./core/server');
const PORT = 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Berhasil terhubung ke MongoDB Atlas!');
    
    app.listen(PORT, () => { console.log(`Server berjalan di http://localhost:${PORT}`) });
  })
  .catch((error) => { console.error('Gagal terhubung ke MongoDB:', error.message) });