const express = require('express');
const router = express.Router();
const gradeController = require('./grade-controller');

router.post('/', gradeController.create);
router.get('/student/:studentId', gradeController.getHistory);

module.exports = router; // 