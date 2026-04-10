require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware agar API bisa menerima data dalam JSON
app.use(express.json());

// sambungan server ke MongoDB Atlas dgn .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Berhasil terhubung ke MongoDB Atlas!');
  })
  .catch((error) => {
    console.error('Gagal terhubung ke MongoDB:', error.message);
  });

// Endpoint dasar untuk mengetes server
app.get('/', (req, res) => {
    res.send('Server REST API Website LINTAR berhasil menyala!');
});

// Perintah untuk menyalakan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});