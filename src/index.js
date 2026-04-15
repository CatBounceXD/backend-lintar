require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');

//Route
const usersRoute = require('./api/components/users/user-route');
const attendRoute = require('./api/components/attendances/attend-route');
const courseRoute = require('./api/components/courses/courses-route');
const gradeRoute = require('./api/components/Grade/grade-route');
const scheduleRoute = require('./api/components/schedules/schedule-route'); //perlu diganti

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
app.use('/attendances', attendRoute);
app.use('/courses', courseRoute);
app.use('/grade', gradeRoute);
app.use('/schedules', scheduleRoute);

app.listen(PORT, () => 
{
    console.log(`Server berjalan di http://localhost:${PORT}`);
});