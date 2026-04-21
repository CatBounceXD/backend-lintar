const usersService = require('./user-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getUsers(req, res, next) {
  try { 
    const users = await usersService.getUsers();
    return res.status(200).json({ status: 'Success', data: users });
  } catch (error) {
    next(error);
  }
}

async function getUsersByRole(req, res, next) {
  try {
    const roleReq = req.params.role; 

    if (roleReq !== 'dosen' && roleReq !== 'mahasiswa') {
      throw errorResponder(errorTypes.FORBIDDEN, 'Invalid Roles: Role harus dosen atau mahasiswa');
    }
    const users = await usersService.getUsersByRole(roleReq);
    
    return res.status(200).json({ 
      status: 'Success', 
      count: users.length, 
      data: users 
    });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const { no_induk, nama, email, password, role } = req.body;
    const user = await usersService.createUser(no_induk, nama, email, password, role);
    
    if (!user) {
        throw errorResponder(errorTypes.BAD_REQUEST, 'User gagal dibuat');
    }

    return res.status(201).json({ status: 'Success', message: 'User created!' });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await usersService.checkLogin(email, password);

    if (!user) {
        throw errorResponder(errorTypes.INVALID_CREDENTIALS, 'Email atau password salah!');
    }
    
    return res.status(200).json({ status: 'Success', message: 'Berhasil Login!', data: user });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const id = req.params.id; 
    const deletedUser = await usersService.deleteUser(id);

    if (!deletedUser) {
      throw errorResponder(errorTypes.NOT_FOUND, 'User yang ingin dihapus tidak ditemukan!');
    }
    
    return res.status(200).json({ status: 'Sukses', message: 'User berhasil didelete!' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers,
  createUser,
  login,
  deleteUser,
  getUsersByRole,
};