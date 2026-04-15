const gradeRepository = require('../repositories/gradeRepository'); // error : nama directory salah dan service filenya tidak sama

class GradeService {
  async inputGrade(payload) {
    // Logika perhitungan nilai akhir (contoh: 40% UTS + 60% UAS)
    const { nilai_uts, nilai_uas } = payload;
    const nilai_akhir = (nilai_uts * 0.4) + (nilai_uas * 0.6);

    const data = { ...payload, nilai_akhir };
    return await gradeRepository.createGrade(data);
  }

  async getStudentHistory(studentId) {
    return await gradeRepository.getGradesByStudent(studentId);
  }
}

module.exports = new GradeService();