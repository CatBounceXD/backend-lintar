const usersService = require('./users-service');

// return 200
async function getUsers(req, res) 
{
  try 
  {
    const users = await usersService.getUsers();
    return res.status(200).json({ status: 'Sukses', data: users });
  } 
  catch (error) 
  {
    return res.status(500).json({ status: 'Error', message: error.message });
  }
}

async function createUser(req, res) 
{
  try 
  {
    const { nama, email, password, role } = req.body;
    await usersService.createUser(nama, email, password, role);
    return res.status(201).json({ status: 'Sukses', message: 'User berhasil dibuat!' });
  } 
  catch (error) 
  {
    return res.status(500).json({ status: 'Error', message: error.message });
  }
}

async function login(req, res) 
{
  try 
  {
    const { email, password } = req.body;
    const user = await usersService.checkLogin(email, password);

    if (!user) 
      return res.status(401).json({ status: 'Gagal', message: 'Email atau password salah!' });

    return res.status(200).json
    ({ 
      status: 'Sukses', 
      message: 'Login berhasil!',
      data: user 
    });
  } 
  catch (error) 
  {
    return res.status(500).json({ status: 'Error', message: error.message });
  }
}

module.exports = {
  getUsers,
  createUser,
  login,
};