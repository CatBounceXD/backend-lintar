require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');

//Route
const usersRoute = require('./api/components/users/users-route');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => 
  {
    console.log('Berhasil terhubung ke MongoDB Atlas!');
  })
  .catch((error) => 
  {
    console.error('Gagal terhubung ke MongoDB:', error.message);
  });

app.get('/', (req, res) => 
{
    res.send('Server REST API Website LINTAR menyala!');
});

//Route
app.use('/users', usersRoute);

app.listen(PORT, () => 
{
    console.log(`Server berjalan di http://localhost:${PORT}`);
});