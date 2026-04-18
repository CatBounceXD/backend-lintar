const express = require('express');
const cors = require('cors');
const routes = require('../api/routes');
const { errorResponder, errorTypes } = require('./errors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes());

app.use((request, response, next) => {
  next(errorResponder(errorTypes.ROUTE_NOT_FOUND, 'Route not found'));
});

app.use((error, request, response, next) => {
  console.error(`[ERROR] ${error.code || 'UNKNOWN'}:`, error.message);

  return response.status(error.status || 500).json({
    statusCode: error.status || 500,
    error: error.code || 'UNKNOWN_ERROR',
    description: error.description || 'Unknown error',
    message: error.message || 'An error has occurred',
  });
});

module.exports = app;