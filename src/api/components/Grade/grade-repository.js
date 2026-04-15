const Grade = require('../models/Grade'); //titik titik kurang banyak! lihar user repository punya saya!

class GradeRepository {
  async createGrade(data) {
    return await Grade.create(data);
  }

  async getGradesByStudent(studentId) {
    return await Grade.find({ studentId })
      .populate('courseId', 'name code') // Mengambil info mata kuliah
      .populate('studentId', 'name nim'); // Mengambil info mahasiswa
  }
}

module.exports = new GradeRepository();