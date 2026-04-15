const gradeService = require('../services/gradeService'); // error : nama directory salah dan service filenya tidak sama

class GradeController {
  async create(req, res) {
    try {
      const result = await gradeService.inputGrade(req.body);
      res.status(201).json({ message: 'Nilai berhasil diinput', data: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getHistory(req, res) {
    try {
      const { studentId } = req.params;
      const history = await gradeService.getStudentHistory(studentId);
      res.status(200).json({ data: history });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new GradeController();