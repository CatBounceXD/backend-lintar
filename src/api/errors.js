function errorHandler(err, req, res, next) 
{
  console.error('Error:', err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json
  ({
    status: 'Error',
    message: err.message || 'Terjadi kesalahan pada server internal'
  });
}

module.exports = errorHandler;