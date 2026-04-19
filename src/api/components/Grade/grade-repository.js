const Grade = require('../../../models/grade-model');

class GradeRepository {
  async createGrade(data) {
    return await Grade.create(data);
  }

  async getGradesByStudent(studentId) {
    // Mencari nilai berdasarkan ID mahasiswa dan menarik data matkul-nya juga
return await Grade.find({ studentId })
  .populate('courseId', 'nama sks fakultas')
  .populate('studentId', 'nama no_induk');
  }
}

module.exports = new GradeRepository();