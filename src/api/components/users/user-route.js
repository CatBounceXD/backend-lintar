const express = require('express');
const usersController = require('./users-controller');

const router = express.Router();

router.get('/', usersController.getUsers);
router.post('/', usersController.createUser);
router.post('/login', usersController.login);

module.exports = router;