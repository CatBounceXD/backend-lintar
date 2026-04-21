const User = require('../../../models/user-models');

async function getUsers() {
  return User.find(); 
}
// Menyimpan data user baru ke MongoDB
async function createUser(no_induk, nama, email, password, role) {
  return User.create ({
    no_induk: no_induk,
    nama: nama,
    email: email,
    password: password,
    role: role
  });
}

async function getUserByEmail(email) {
  return User.findOne({ email: email });
}

async function deleteUser(id) {
  return User.findByIdAndDelete(id);
}

async function getUsersByRole(role) {
  return User.find({ role: role });
}

module.exports = {
  getUsers,
  createUser,
  getUserByEmail,
  deleteUser,
  getUsersByRole,
};

// Kyk Querry SQL dalam bentuk fungsi