const express = require('express');
const router = express.Router();
const ScheduleController = require('./schedule-controller');

router.get('/', ScheduleController.getAll);
router.post('/', ScheduleController.create);
router.get('/:id', ScheduleController.getById);
router.put('/:id', ScheduleController.update);
router.delete('/:id', ScheduleController.delete);

module.exports = router;