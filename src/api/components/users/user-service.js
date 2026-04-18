const usersRepository = require('./user-repository');
const bcrypt = require('bcrypt');

async function getUsers() 
{ const users = await usersRepository.getUsers();
  //fromat
  const results = [];
  for (let i = 0; i < users.length; i += 1) 
  {
    const user = users[i];
    results.push
    ({
      id: user._id,
      no_induk: user.no_induk,
      nama: user.nama,
      email: user.email,
      role: user.role,
    });
  }
  return results;
}

//Enkripsi
async function createUser(no_induk, nama, email, password, role) 
{ const saltRounds = 10;
  const hashedPass = await bcrypt.hash(password, saltRounds);

  return await usersRepository.createUser(no_induk, nama, email, hashedPass, role);
}
// Verify
async function checkLogin(email, password) 
{
  const user = await usersRepository.getUserByEmail(email);

  if (!user) 
    return null; 

  const passCorrect = await bcrypt.compare(password, user.password);

  if (!passCorrect) 
    return null;

  return {
    id: user._id,
    no_induk: user.no_induk,
    nama: user.nama,
    email: user.email,
    role: user.role
  };
}

async function deleteUser(id) { return await usersRepository.deleteUser(id); }

module.exports = 
{
  getUsers,
  createUser,
  checkLogin,
  deleteUser,
};

// Process Logic