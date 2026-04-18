const errorTypes = {
  SERVER: { description: 'Server error occurred', status: 500, code: 'SERVER_ERROR' },
  BAD_REQUEST: { description: 'Bad request', status: 400, code: 'BAD_REQUEST_ERROR' },
  VALIDATION: { description: 'Invalid request', status: 400, code: 'VALIDATION_ERROR' },
  FORBIDDEN: { description: 'Access forbidden', status: 403, code: 'FORBIDDEN_ERROR' },
  INVALID_CREDENTIALS: { description: 'Invalid credentials', status: 403, code: 'INVALID_CREDENTIALS_ERROR' },
  ROUTE_NOT_FOUND: { description: 'Route not found', status: 404, code: 'ROUTE_NOT_FOUND_ERROR' },
  NOT_FOUND: { description: 'Empty response, not found', status: 404, code: 'NOT_FOUND_ERROR' },
};

const errorResponder = (errorType, message = '') => {
  const error = new Error(message);

  if (errorType) {
    error.code = errorType.code || 'UNKNOWN_ERROR';
    error.status = errorType.status || 500;
    error.description = errorType.description || 'Unknown error occurred';
  }
  return error;
};

module.exports = { errorTypes, errorResponder };