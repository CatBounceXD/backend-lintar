const usersService = require('./user-service');

async function getUsers(req, res, next) {
  try { 
    const users = await usersService.getUsers();
    return res.status(200).json({ status: 'Success', data: users });
  } 
  catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const { no_induk, nama, email, password, role } = req.body;
    await usersService.createUser( no_induk, nama, email, password, role );
    return res.status(201).json({ status: 'Success', message: 'User created!' });
  } 
  catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await usersService.checkLogin(email, password);

    if (!user) {
      const error = new Error('Email atau password salah!'); // Buat Error baru
      error.statusCode = 401;
      throw error;
    }
    return res.status(200).json({ status: 'Success', message: 'Berhasil Login!', data: user });
  } 
  catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const id = req.params.id; 
    const deletedUser = await usersService.deleteUser(id);

    if (!deletedUser) {
      const error = new Error('User tidak ditemukan!');
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ status: 'Sukses', message: 'User berhasil didelete!' });
  } 
  catch (error) {
    next(error); // Lempar ke satpam!
  }
}

module.exports = {
 getUsers,
  createUser,
  login,
  deleteUser,
};

// ngecek inpui