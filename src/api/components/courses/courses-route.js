const express = require('express');
const router = express.Router();

const CourseController = require('./courses-controller');

router.get('/', CourseController.getCourses);
router.post('/', CourseController.createCourse);
router.put('/:id', CourseController.updateCourse);
router.delete('/:id', CourseController.deleteCourse);

module.exports = router;