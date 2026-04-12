const usersRepository = require('./users/users-repository');
const bcrypt = require('bcrypt');

async function getUsers() 
{
  const users = await usersRepository.getUsers();
  
  //fromat
  const results = [];
  for (let i = 0; i < users.length; i += 1) 
  {
    const user = users[i];
    results.push
    ({
      id: user._id,
      nama: user.nama,
      email: user.email,
      role: user.role,
    });
  }
  return results;
}

//Enkripsi
async function createUser(nama, email, password, role) 
{
  const saltRounds = 10;
  const hashedPass = await bcrypt.hash(password, saltRounds);

  return await usersRepository.createUser(nama, email, hashedPass, role);
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
    nama: user.nama,
    email: user.email,
    role: user.role
  };
}

module.exports = 
{
  getUsers,
  createUser,
  checkLogin,
};