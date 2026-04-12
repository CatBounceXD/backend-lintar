const express = require('express');
const usersController = require('./user-controller');

const router = express.Router();

router.get('/', usersController.getUsers);
router.post('/', usersController.createUser);
router.post('/login', usersController.login);

module.exports = router;