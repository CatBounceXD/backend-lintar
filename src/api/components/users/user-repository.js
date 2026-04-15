const User = require('../../../models/user-models');

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

async function deleteUser(id) 
{
  return User.findByIdAndDelete(id);
}

module.exports = 
{
  getUsers,
  createUser,
  getUserByEmail,
  deleteUser,
};

// Kyk Querry SQL dalam bentuk fungsi