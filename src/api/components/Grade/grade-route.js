const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

router.post('/', gradeController.create);
router.get('/student/:studentId', gradeController.getHistory);

module.exports = router;