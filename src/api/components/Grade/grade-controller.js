const gradeService = require('./grade-service.js');
const { errorResponder, errorTypes } = require('../../../core/errors');

class GradeController {
  async create(req, res, next) {
    try {
      const result = await gradeService.inputGrade(req.body);
      
      if (!result) {
        throw errorResponder(errorTypes.BAD_REQUEST, 'Nilai gagal diinput');
      }

      return res.status(201).json({ 
        message: 'Nilai berhasil diinput', 
        data: result 
      });
    } catch (error) {
      next(error);
    }
  }

  async getHistory(req, res, next) {
    try {
      const { studentId } = req.params;
      const history = await gradeService.getStudentHistory(studentId);
      
      if (!history || history.length === 0) {
        throw errorResponder(errorTypes.NOT_FOUND, 'Riwayat tidak ditemukan');
      }

      return res.status(200).json({ data: history });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new GradeController();