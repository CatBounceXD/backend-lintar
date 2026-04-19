const express = require ('express');

const userRoute = require ('./components/users/user-route');
const attendRoute = require ('./components/attendances/attend-route');
const courseRoute = require ('./components/courses/courses-route');
// const gradeRoute = require ('./components/Grade/grade-route');
// const scheduleRoute = require ('./components/schedules/schedule-route');

module.exports = () => {
    const router = express.Router();

    userRoute(router);
    attendRoute(router);
    courseRoute(router);
    // gradeRoute(router);
    // scheduleRoute(router);

    return router;
};