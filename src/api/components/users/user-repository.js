const User = require('src/models/users-models');

async function getUsers() 
{
  return User.find(); 
}

// Menyimpan data user baru ke MongoDB
async function createUser(nama, email, password, role) 
{
  return User.create
  ({
    nama: nama,
    email: email,
    password: password,
    role: role
  });
}

async function getUserByEmail(email) 
{
  return User.findOne({ email: email });
}

module.exports = 
{
  getUsers,
  createUser,
  getUserByEmail,
};